# Python class represent the entities
from typing import Optional
from pydantic import BaseModel
from datetime import date, datetime
from decimal import Decimal
from helpers import time as time_helper


# Shared properties
class UserInfoBase(BaseModel):
    user_id: Optional[int]
    avatar_url: Optional[str] = None
    birth_date: Optional[datetime] = None
    address: Optional[str] = None
    country: Optional[str] = None
    create_date: Optional[datetime]
    update_date: Optional[datetime] = None
    class Config:
        orm_mode = True

class UserInfoInDB(UserInfoBase):
    id: Optional[int]

class UserInfoUpdate(BaseModel):
    user_id: Optional[int]
    avatar_url: Optional[str] = None
    birth_date: Optional[str] = None
    address: Optional[str] = None
    country: Optional[str] = None
    update_date: Optional[datetime] = time_helper.now_utc()


class UserInfoCreate(BaseModel):
    user_id: Optional[int]
    avatar_url: Optional[str] = None
    birth_date: Optional[str] = None
    address: Optional[str] = None
    country: Optional[str] = None
    create_date: Optional[datetime] = time_helper.now_utc()