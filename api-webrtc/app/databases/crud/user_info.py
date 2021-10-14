from databases.models.user_info import UserInfo
from databases.entities.user_info import UserInfoCreate
from sqlalchemy.orm import Session


def create(*, db: Session, form_data: UserInfoCreate) -> UserInfo:
    load_model = UserInfo(**form_data.dict())
    db.add(load_model)
    db.commit()
    db.refresh(load_model)
    return load_model

def update(*, db: Session, id: int, form_data: dict) -> UserInfo:
    data = db.query(UserInfo).filter(UserInfo.id == id).update(form_data, synchronize_session = False)
    db.commit()
    return data

def get(*, db: Session, id: int) -> UserInfo:
    query = db.query(UserInfo).filter(UserInfo.id == id).first()
    return query

def delete(*, db: Session, id: int) -> UserInfo:
    query = db.query(UserInfo).filter(UserInfo.id == id).delete()
    db.commit()
    return query