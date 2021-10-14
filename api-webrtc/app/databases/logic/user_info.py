from sqlalchemy.orm import Session

from databases.models.user_info import UserInfo

from databases.models.user import User

from sqlalchemy.orm import Session, joinedload


def get_by_user_id_join(db: Session, id: int) -> UserInfo:
    return db.query(UserInfo).filter(UserInfo.user_id == id).options(joinedload(UserInfo.user)).first()