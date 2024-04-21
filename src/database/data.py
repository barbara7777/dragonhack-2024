from src.models.career_orientation import CareerOrientationModel
from src.models.constraints import CareerOrientationCategory
from src.models.quests import QuestModel
from src.models.user import UserModel


users = [
    UserModel(
        username="Dragica",
        email="dragica@dragonhack.eu",
        name="Dragica",
        surname="Dragon",
        quests=[
            QuestModel(
                id=0,
                title="Education",
                description="Build up knowledge base and widen horizons",
                progress=9,
                reward=0,
                is_completed=False,
                is_active=True
            ),
            QuestModel(
                id=1,
                title="Soft Skills",
                description="Polish essential soft skills through practical, interactive exercises",
                progress=3,
                reward=0,
                is_completed=False,
                is_active=True
            ),
            QuestModel(
                id=2,
                title="Career",
                description="Explore potential career paths and skills through interactive experiences",
                progress=0,
                reward=0,
                is_completed=False,
                is_active=False
            ),
        ],
        career=CareerOrientationModel(
            id=0,
            title="Software Developer",
            description="Explore potential career paths and skills through interactive experiences.",
            category=CareerOrientationCategory.IT
        ),
        cv="sample_user_cv"
    )
]


def get_user() -> UserModel:
    """
    Returns mocked user
    """
    return users[0]
