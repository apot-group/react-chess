# Python class represent the entities
from typing import Optional
from pydantic import BaseModel
from datetime import date, datetime
from decimal import Decimal

from sqlalchemy.sql.expression import update
from helpers import time as time_helper

# Shared properties
class UserBase(BaseModel):
    first_name: Optional[str]
    last_name: Optional[str]
    email: Optional[str]
    phone: Optional[str]
    password: Optional[str]
    create_date: Optional[datetime]
    update_date: Optional[datetime] = None
    class Config:
        orm_mode = True

class UserInDB(UserBase):
    id: Optional[int]

class UserUpdate(BaseModel):
    first_name: Optional[str]
    last_name: Optional[str]
    email: Optional[str]
    phone: Optional[str]
    password: Optional[str]
    update_date: Optional[datetime] = time_helper.now_utc()
    

class UserCreate(BaseModel):
    first_name: Optional[str] = None
    last_name: Optional[str] = None
    email: Optional[str]
    phone: Optional[str] = None
    password: Optional[str]
    create_date: Optional[datetime] = time_helper.now_utc()
