from pydantic import BaseModel

from src.models.constraints import CareerOrientationCategory


class CareerOrientationModel(BaseModel):
    id: int
    title: str
    description: str
    category: CareerOrientationCategory
