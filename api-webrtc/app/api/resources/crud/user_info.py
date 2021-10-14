from fastapi import APIRouter, Depends, HTTPException
from databases.db import get_db
from sqlalchemy.orm import Session
from databases.crud import user_info as user_info_crud
from databases.entities import user_info as user_info_entity
from securities import token as token_helper
router = APIRouter()


@router.get("/{id}")
def read_user_info_by_id(
    *,
    db: Session = Depends(get_db),
    id: int,
    current_user = Depends(token_helper.get_current_user)
):
    """
    Get user_info by ID.
    """
    user_info_result = user_info_crud.get(db=db, id=id)
    if not user_info_result:
        raise HTTPException(status_code=400, detail="user_info not found")
    dict = user_info_result.__dict__
    return dict


@router.post("/")
def create_user_info(
    *,
    db: Session = Depends(get_db),
    form_data: user_info_entity.UserInfoCreate,
    current_user = Depends(token_helper.get_current_user)):
    """
    Create new user_info.
    """
    user_info_created = user_info_crud.create(db=db, form_data=form_data)
    dict = user_info_created.__dict__
    return dict

@router.put("/{id}", response_model=user_info_entity.UserInfoUpdate)
def update_user(
    *,
    db: Session = Depends(get_db),
    id: int,
    form_data: user_info_entity.UserInfoUpdate,
    current_user = Depends(token_helper.get_current_user)):
    """
    Update an user.
    """
    user_old = user_info_crud.get(db_session=db, id=id)
    if not user_old:
        raise HTTPException(status_code=404, detail="user not found")
    user_updated = user_info_crud.update(db_session=db, id=id, form_data=form_data.__dict__)
    return user_updated


@router.delete("/{id}")
def delete_user_info(
    *,
    db: Session = Depends(get_db),
    id: int,
    current_user = Depends(token_helper.get_current_user)):
    """
    pernament delete an user_info.
    """
    user_info = user_info_crud.get(db=db, id=id)
    if not user_info:
        raise HTTPException(status_code=404, detail="user_info not found")
    return "SUCCESS"