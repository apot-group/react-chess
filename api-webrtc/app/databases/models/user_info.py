from sqlalchemy import Boolean, Column, ForeignKey, Integer, String, DateTime, Boolean, DECIMAL, ForeignKey
from sqlalchemy.sql.sqltypes import Date
from databases.db import Base
from sqlalchemy.orm import relationship


class UserInfo(Base):
    __tablename__ = "user_info"
    __table_args__ = {'extend_existing': True} 
    id = Column(Integer, primary_key=True)
    user_id = Column(Integer, ForeignKey("user.id"))
    avatar_url = Column(String(1000), nullable=True, default=None)
    birth_date = Column(DateTime, nullable=True, default=None)
    address = Column(String(1000), nullable=True, default=None)
    country = Column(String(256), nullable=True, default=None)
    user = relationship("User", lazy = 'noload', foreign_keys=[user_id])
    create_date = Column(DateTime, nullable=False)
    update_date = Column(DateTime, nullable=True, default=None)

