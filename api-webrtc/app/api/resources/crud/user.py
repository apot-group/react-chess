from fastapi import APIRouter, Depends, HTTPException
from databases.db import get_db
from sqlalchemy.orm import Session
from databases.crud import user as user_crud
from databases.entities import user as user_entity
from securities import token as token_helper
router = APIRouter()


@router.get("/{id}")
def read_user_by_id(
    *,
    db: Session = Depends(get_db),
    id: int,
    current_user = Depends(token_helper.get_current_user)
):
    """
    Get user by ID.
    """
    user_result = user_crud.get(db=db, id=id)
    if not user_result:
        raise HTTPException(status_code=400, detail="user not found")
    dict = user_result.__dict__
    return dict


@router.post("/")
def create_user(
    *,
    db: Session = Depends(get_db),
    form_data: user_entity.UserCreate,
    current_user = Depends(token_helper.get_current_user)):
    """
    Create new user.
    """
    user_created = user_crud.create(db=db, form_data=form_data)
    dict = user_created.__dict__
    return dict

@router.put("/{id}", response_model=user_entity.UserUpdate)
def update_user(
    *,
    db: Session = Depends(get_db),
    id: int,
    form_data: user_entity.UserUpdate,
    current_user = Depends(token_helper.get_current_user)):
    """
    Update an user.
    """
    user_old = user_crud.get(db_session=db, id=id)
    if not user_old:
        raise HTTPException(status_code=404, detail="user not found")
    user_updated = user_crud.update(db_session=db, id=id, form_data=form_data.__dict__)
    return user_updated


@router.delete("/{id}")
def delete_user(
    *,
    db: Session = Depends(get_db),
    id: int,
    current_user = Depends(token_helper.get_current_user)):
    """
    pernament delete an user.
    """
    user = user_crud.get(db=db, id=id)
    if not user:
        raise HTTPException(status_code=404, detail="user not found")
    return user