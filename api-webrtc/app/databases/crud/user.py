from databases.models.user import User
from databases.entities.user import UserCreate
from sqlalchemy.orm import Session


def create(*, db: Session, form_data: UserCreate) -> User:
    load_model = User(**form_data.dict())
    db.add(load_model)
    db.commit()
    db.refresh(load_model)
    return load_model

def update(*, db: Session, form_data: dict) -> User:
    data = db.query(User).filter(User.id == form_data.id).update(form_data, synchronize_session = False)
    db.commit()
    return data

def get(*, db: Session, id: int) -> User:
    query = db.query(User).filter(User.id == id).first()
    return query

def delete(*, db: Session, id: int) -> User:
    query = db.query(User).filter(User.id == id).delete()
    db.commit()
    return query