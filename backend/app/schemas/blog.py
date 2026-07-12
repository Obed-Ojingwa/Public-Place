"""
Pydantic schemas for BlogPost model
"""
from pydantic import BaseModel, Field
from typing import Optional, List
from datetime import datetime


class BlogPostBase(BaseModel):
    slug: str
    title: str
    description: Optional[str] = None
    content: str
    featured_image_url: Optional[str] = None
    author: Optional[str] = "NerdPace Team"
    category: Optional[str] = None
    tags: Optional[List[str]] = None
    seo_keyword: Optional[str] = None
    internal_links: Optional[List[str]] = None
    read_time_minutes: Optional[int] = 5
    views_count: Optional[int] = 0
    published: Optional[bool] = False
    published_at: Optional[datetime] = None


class BlogPostCreate(BlogPostBase):
    pass


class BlogPostUpdate(BaseModel):
    slug: Optional[str] = None
    title: Optional[str] = None
    description: Optional[str] = None
    content: Optional[str] = None
    featured_image_url: Optional[str] = None
    author: Optional[str] = None
    category: Optional[str] = None
    tags: Optional[List[str]] = None
    seo_keyword: Optional[str] = None
    internal_links: Optional[List[str]] = None
    read_time_minutes: Optional[int] = None
    views_count: Optional[int] = None
    published: Optional[bool] = None
    published_at: Optional[datetime] = None


class BlogPostResponse(BlogPostBase):
    id: str
    created_at: datetime
    updated_at: datetime

    class Config:
        orm_mode = True