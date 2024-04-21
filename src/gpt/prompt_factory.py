from src.gpt.assistant import ask_openai
from src.models.career_orientation import CareerOrientationModel
from src.models.quests import QuestModel

SYSTEM_PROMPT = '''
You are a HR expert specializing in helping young individuals define their career paths.
You have been tasked with helping a young individual define their career path.
Base on provided information about the individual and their career orientation, you
are to provide a career path for the individual in a step-by-step manner.
'''


def define_career_path(quest: QuestModel, career_orientation: CareerOrientationModel) -> str:
    basic_prompt = f'''
    You have been tasked with helping a young individual define their career path.
    The individual is interested in a career in {career_orientation.title}.
    The main focus of the individual is {quest.title}. More percisely, to {quest.description}.
    They need simply explained steps to help them achieve their goal.
    Please provide a step-by-step guide to help the individual achieve their goal.
    Return just the enumbered steps.
    '''
    return ask_openai(basic_prompt, SYSTEM_PROMPT)


def define_path_stepstones(path_description: str, career_orientation: CareerOrientationModel) -> str:
    basic_prompt = f'''
    You are a HR expert specializing in helping young individuals define their career paths.
    Based on the career orientation of the individual, you are to provide a step-by-step guide 
    to help the individual achieve their goal. The individual is interested in a career in
    {career_orientation.title}. The main focus of the individual is {path_description}.
    Please provide a step-by-step guide to help the individual achieve their goal.
    '''
    return ask_openai(basic_prompt, SYSTEM_PROMPT)


def check_cv(cv: str) -> str:
    prompt = f'''
    Here is the CV of the user {cv}. Please check the CV and provide constructive feedback.
    Try to be as detailed as possible, while providing bullet points on areas of improvement.
    Give clear instructions on how the user can improve their CV.
    '''
    return ask_openai(prompt, SYSTEM_PROMPT)


def suggest_improvements_on_cv(cv_text: str) -> str:
    prompt = f'''
    Here is the CV of the user {cv_text}. Please suggest improvements on the CV.
    Try to be as detailed as possible, while providing bullet points on areas of improvement.
    Give clear instructions on how the user can improve their CV.
    '''
    return ask_openai(prompt, SYSTEM_PROMPT)