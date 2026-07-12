"""
CRUD operations for Testimonial model
"""
from typing import Generic, TypeVar, Type, List, Optional, Dict, Any
from sqlalchemy.orm import Session
from sqlalchemy import select
from app.models.base import Base
from app.models.testimonial import Testimonial

ModelType = TypeVar("ModelType", bound=Base)
CreateSchemaType = TypeVar("CreateSchemaType")
UpdateSchemaType = TypeVar("UpdateSchemaType")


class CRUDTestimonial(Generic[ModelType, CreateSchemaType, UpdateSchemaType]):
    def __init__(self, model: Type[ModelType]):
        self.model = model

    def get(self, db: Session, id: str) -> Optional[ModelType]:
        return db.get(self.model, id)

    def get_multi(
        self, db: Session, *, skip: int = 0, limit: int = 100
    ) -> List[ModelType]:
        query = select(self.model).offset(skip).limit(limit)
        result = db.execute(query)
        return list(result.scalars().all())

    def get_approved(self, db: Session, skip: int = 0, limit: int = 100) -> List[ModelType]:
        query = (
            select(self.model)
            .where(self.model.is_approved == True)
            .offset(skip)
            .limit(limit)
        )
        result = db.execute(query)
        return list(result.scalars().all())

    def get_featured(self, db: Session, skip: int = 0, limit: int = 100) -> List[ModelType]:
        query = (
            select(self.model)
            .where(self.model.is_featured == True, self.model.is_approved == True)
            .offset(skip)
            .limit(limit)
        )
        result = db.execute(query)
        return list(result.scalars().all())

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


testimonial = CRUDTestimonial(Testimonial)