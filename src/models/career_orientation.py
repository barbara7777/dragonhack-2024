from pydantic import BaseModel

from models.constraints import CareerOrientationCategory


class CareerOrientationModel(BaseModel):
    id: int
    title: str
    description: str
    category: CareerOrientationCategory
