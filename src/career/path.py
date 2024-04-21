from src.models.user import UserModel
from src.gpt.prompt_factory import define_career_path, define_path_stepstones


def generate_career_path(user: UserModel) -> tuple[str, str, str]:
    """
    Generate a tailored career path for the user. Based on the user's characteristics and career goals.
    The function calls for each category for a step-by-step guide to help the user achieve their career goals.
    """
    education_path = define_career_path(user.quests[0], user.career)
    soft_skills_path = define_career_path(user.quests[0], user.career)
    career_path = define_career_path(user.quests[0], user.career)
    return education_path, soft_skills_path, career_path


def create_path_steps(user: UserModel, path_description: str) -> str:
    """
    Generate a step-by-step guide to help the user achieve their career goals.
    The function calls GPT for a step-by-step guide to help the user achieve their career goals.
    """
    return define_path_stepstones(path_description, user.career)