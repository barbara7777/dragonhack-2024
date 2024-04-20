from pydantic import BaseModel
from quests import QuestModel
from career_orientation import CareerOrientationModel


class UserModel(BaseModel):
    username: str
    email: str
    name: str
    surname: str
    quests: dict[QuestModel]
    career: CareerOrientationModel
