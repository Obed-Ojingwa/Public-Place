# // ============================================================================
# // FILE 3: Backend Blog API Endpoints
# // Path: C:\Users\[YourUsername]\Documents\nerdpace\backend\app\api\v1\endpoints\blog.py
 
from fastapi import APIRouter, Depends, HTTPException, Query
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select, desc, and_
from typing import List
from datetime import datetime
 
from app.models.blog import BlogPost
from app.models.schemas import BlogPostCreate, BlogPostResponse
from app.db.session import get_db
from app.crud.blog import blog as crud_blog
 
router = APIRouter()
 
 
@router.get("/posts", response_model=List[BlogPostResponse])
async def list_blog_posts(
    skip: int = Query(0, ge=0),
    limit: int = Query(20, le=100),
    category: str = Query(None),
    tag: str = Query(None),
    published_only: bool = Query(True),
    db: AsyncSession = Depends(get_db)
):
    """List blog posts with filters"""
    query = select(BlogPost)
    
    if published_only:
        query = query.where(BlogPost.published == True)
    
    if category:
        query = query.where(BlogPost.category == category)
    
    if tag:
        query = query.where(BlogPost.tags.contains([tag]))
    
    query = query.order_by(desc(BlogPost.published_at)).offset(skip).limit(limit)
    
    result = await db.execute(query)
    posts = result.scalars().all()
    
    return posts
 
 
@router.get("/posts/{slug}", response_model=BlogPostResponse)
async def get_blog_post(slug: str, db: AsyncSession = Depends(get_db)):
    """Get single blog post by slug"""
    query = select(BlogPost).where(BlogPost.slug == slug)
    result = await db.execute(query)
    post = result.scalar_one_or_none()
    
    if not post:
        raise HTTPException(status_code=404, detail="Post not found")
    
    # Increment view count
    post.views_count = (post.views_count or 0) + 1
    db.add(post)
    await db.commit()
    
    return post
 
 
@router.get("/categories")
async def get_blog_categories(db: AsyncSession = Depends(get_db)):
    """Get all blog categories"""
    query = select(BlogPost.category).distinct().where(BlogPost.published == True)
    result = await db.execute(query)
    categories = result.scalars().all()
    
    return {"categories": categories}
 
 
@router.post("/posts", response_model=BlogPostResponse)
async def create_blog_post(
    post_in: BlogPostCreate,
    db: AsyncSession = Depends(get_db)
):
    """Create new blog post (admin only)"""
    # In production, add authentication check here
    db_post = await crud_blog.create(db, post_in)
    return db_post
 
 
@router.put("/posts/{post_id}", response_model=BlogPostResponse)
async def update_blog_post(
    post_id: str,
    post_update: BlogPostCreate,
    db: AsyncSession = Depends(get_db)
):
    """Update blog post (admin only)"""
    post = await crud_blog.get(db, post_id)
    if not post:
        raise HTTPException(status_code=404, detail="Post not found")
    
    updated_post = await crud_blog.update(db, post, post_update)
    return updated_post
 
 
@router.delete("/posts/{post_id}")
async def delete_blog_post(post_id: str, db: AsyncSession = Depends(get_db)):
    """Delete blog post (admin only)"""
    success = await crud_blog.delete(db, post_id)
    if not success:
        raise HTTPException(status_code=404, detail="Post not found")
    
    return {"message": "Post deleted successfully"}
 
 
@router.get("/trending")
async def get_trending_posts(
    limit: int = Query(5, le=20),
    db: AsyncSession = Depends(get_db)
):
    """Get trending posts by views"""
    query = (
        select(BlogPost)
        .where(BlogPost.published == True)
        .order_by(desc(BlogPost.views_count))
        .limit(limit)
    )
    
    result = await db.execute(query)
    posts = result.scalars().all()
    
    return posts
 
 
@router.post("/posts/{post_id}/publish")
async def publish_blog_post(post_id: str, db: AsyncSession = Depends(get_db)):
    """Publish a blog post (admin only)"""
    post = await crud_blog.get(db, post_id)
    if not post:
        raise HTTPException(status_code=404, detail="Post not found")
    
    post.published = True
    post.published_at = datetime.utcnow()
    db.add(post)
    await db.commit()
    await db.refresh(post)
    
    return post