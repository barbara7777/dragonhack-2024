from pydantic import BaseModel
from src.models.quests import QuestModel
from src.models.career_orientation import CareerOrientationModel


class UserModel(BaseModel):
    username: str
    email: str
    name: str
    surname: str
    quests: list[QuestModel]
    career: CareerOrientationModel
    cv: str
