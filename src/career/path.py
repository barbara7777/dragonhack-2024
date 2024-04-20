from models.user import UserModel
from gpt.prompt_factory import define_career_path


def generate_career_path(user: UserModel) -> str:
    path = define_career_path(user.quests, user.career)
    return path