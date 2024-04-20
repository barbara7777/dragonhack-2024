from fastapi import FastAPI

from src.gpt.prompt_factory import check_cv
from src.models.user import UserModel
from src.util.data import get_user

app = FastAPI()

@app.get("/")
async def root():
    return {"message": "Hello World"}


@app.get("/profile")
async def profile():
    return {"message": "This is the profile page"}


@app.get("/profile/{username}/cv/check")
async def check_users_cv(username: str):
    user: UserModel = get_user(username)
    return check_cv(user.cv)