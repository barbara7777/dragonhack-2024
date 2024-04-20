from pydantic import BaseModel
from constraints import CareerOrientationCategory


class CareerOrientationModel(BaseModel):
    id: int
    title: str
    description: str
    category: CareerOrientationCategory
