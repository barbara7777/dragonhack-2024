from src.models.user import UserModel
from src.gpt.prompt_factory import define_career_path, define_path_stepstones


def generate_career_path(user: UserModel) -> tuple[str, str, str]:
    education_path = define_career_path(user.quests[0], user.career)
    soft_skills_path = define_career_path(user.quests[0], user.career)
    career_path = define_career_path(user.quests[0], user.career)
    return education_path, soft_skills_path, career_path


def create_path_steps(user: UserModel, path_description: str) -> str:
    return define_path_stepstones(path_description, user.career)