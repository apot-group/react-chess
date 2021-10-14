from fastapi import APIRouter

from api.resources.v1 import account
from api.resources.crud import user, user_info


router = APIRouter()


router.include_router(account.router, prefix="/account",  tags=["V1-Account"])

router.include_router(user.router, prefix="/user",  tags=["user"])
router.include_router(user_info.router, prefix="/user-info",  tags=["user_info"])


