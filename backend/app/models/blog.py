# // FILE 4: Backend Blog Models & CRUD
# // Path: C:\Users\[YourUsername]\Documents\nerdpace\backend\app\models\blog.py
 
from sqlalchemy import Column, String, Text, DateTime, Boolean, Integer
from sqlalchemy.dialects.postgresql import UUID, ARRAY
from datetime import datetime
import uuid
 
from app.db.base import Base
 
 
class BlogPost(Base):
    __tablename__ = "blog_posts"
 
    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    slug = Column(String(255), unique=True, nullable=False, index=True)
    title = Column(String(500), nullable=False)
    description = Column(String(500))
    content = Column(Text, nullable=False)  # Markdown content
    featured_image_url = Column(String(500))
    author = Column(String(255), default="NerdPace Team")
    category = Column(String(100), index=True)
    tags = Column(ARRAY(String), nullable=True)
    seo_keyword = Column(String(255))
    internal_links = Column(ARRAY(String), nullable=True)
    read_time_minutes = Column(Integer, default=5)
    views_count = Column(Integer, default=0)
    published = Column(Boolean, default=False)
    published_at = Column(DateTime, nullable=True)
    created_at = Column(DateTime, default=datetime.utcnow, index=True)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)
 
    def __repr__(self):
        return f"<BlogPost {self.title}>"
 
 
# CRUD Operations
from app.crud.base import CRUDBase
 
 
class CRUDBlog(CRUDBase[BlogPost, dict, dict]):
    """CRUD operations for blog posts"""
    
    async def get_by_slug(self, db, slug: str):
        """Get post by slug"""
        from sqlalchemy import select
        query = select(self.model).where(self.model.slug == slug)
        result = await db.execute(query)
        return result.scalar_one_or_none()
    
    async def get_published(self, db, skip: int = 0, limit: int = 10):
        """Get published posts only"""
        from sqlalchemy import select, desc
        query = (
            select(self.model)
            .where(self.model.published == True)
            .order_by(desc(self.model.published_at))
            .offset(skip)
            .limit(limit)
        )
        result = await db.execute(query)
        return result.scalars().all()
 
 
blog = CRUDBlog(BlogPost)