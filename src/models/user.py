from pydantic import BaseModel
from src.quests import QuestModel
from src.career_orientation import CareerOrientationModel


class UserModel(BaseModel):
    username: str
    email: str
    name: str
    surname: str
    quests: dict[QuestModel]
    career: CareerOrientationModel
    cv: str
