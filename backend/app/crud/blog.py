"""
CRUD operations for BlogPost model
"""
from typing import Generic, TypeVar, Type, List, Optional, Dict, Any
from sqlalchemy.orm import Session
from sqlalchemy import select, desc
from app.models.base import Base
from app.models.blog import BlogPost

ModelType = TypeVar("ModelType", bound=Base)
CreateSchemaType = TypeVar("CreateSchemaType")
UpdateSchemaType = TypeVar("UpdateSchemaType")


class CRUDBlog(Generic[ModelType, CreateSchemaType, UpdateSchemaType]):
    def __init__(self, model: Type[ModelType]):
        self.model = model

    def get(self, db: Session, id: str) -> Optional[ModelType]:
        return db.get(self.model, id)

    def get_by_slug(self, db: Session, slug: str) -> Optional[ModelType]:
        query = select(self.model).where(self.model.slug == slug)
        result = db.execute(query)
        return result.scalar_one_or_none()

    def get_multi(
        self, db: Session, *, skip: int = 0, limit: int = 100, published_only: bool = False
    ) -> List[ModelType]:
        query = select(self.model)
        if published_only:
            query = query.where(self.model.published == True)
        query = query.offset(skip).limit(limit)
        result = db.execute(query)
        return list(result.scalars().all())

    def get_published(self, db: Session, skip: int = 0, limit: int = 10) -> List[ModelType]:
        query = (
            select(self.model)
            .where(self.model.published == True)
            .order_by(desc(self.model.published_at))
            .offset(skip)
            .limit(limit)
        )
        result = db.execute(query)
        return result.scalars().all()

    def create(self, db: Session, *, obj_in: CreateSchemaType) -> ModelType:
        obj_in_data = obj_in.dict() if hasattr(obj_in, "dict") else dict(obj_in)
        db_obj = self.model(**obj_in_data)
        db.add(db_obj)
        db.commit()
        db.refresh(db_obj)
        return db_obj

    def update(
        self,
        db: Session,
        *,
        db_obj: ModelType,
        obj_in: UpdateSchemaType | Dict[str, Any]
    ) -> ModelType:
        obj_data = db_obj.__dict__
        if isinstance(obj_in, dict):
            update_data = obj_in
        else:
            update_data = obj_in.dict(exclude_unset=True)
        for field in obj_data:
            if field in update_data:
                setattr(db_obj, field, update_data[field])
        db.add(db_obj)
        db.commit()
        db.refresh(db_obj)
        return db_obj

    def remove(self, db: Session, *, id: str) -> ModelType:
        obj = db.get(self.model, id)
        db.delete(obj)
        db.commit()
        return obj

    def publish(self, db: Session, *, id: str) -> ModelType:
        obj = db.get(self.model, id)
        if obj:
            obj.published = True
            obj.published_at = datetime.utcnow()
            db.add(obj)
            db.commit()
            db.refresh(obj)
        return obj


blog = CRUDBlog(BlogPost)