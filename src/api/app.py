from fastapi import FastAPI

from src.gpt.prompt_factory import check_cv
from src.models.user import UserModel
from src.database.data import get_user

app = FastAPI()

@app.get("/")
async def root():
    return get_user().quests


@app.get("/profile/}")
async def profile() -> str:
    return get_user().model_dump_json()


@app.get("/profile/cv/check")
async def check_users_cv() -> str:
    user: UserModel = get_user()
    user_cv = upload_cv(user.cv)
    return check_cv(user_cv)