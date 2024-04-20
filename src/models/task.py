from pydantic import BaseModel


class TaskModel(BaseModel):
    id: int
    title: str
    description: str
    progress: int
    reward: int
    is_completed: bool
    is_active: bool
