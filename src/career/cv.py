import os
from dotenv import load_dotenv
import requests

from gpt.prompt_factory import check_cv

load_dotenv()

TOKEN = os.getenv('SCORE_MY_RESUME_API_TOKEN')
BASE_URL = "https://play.scoremyresume.com/api/score/analyze"


def score_resume(cv_text: str) -> dict:
    """
    Analyze the resume. Use external API to give feedback on the resume.
    """
    headers = {'Authorization': 'Bearer ' + TOKEN}
    payload = {'content': cv_text}

    response = requests.post(BASE_URL, headers=headers, data=payload)
    response.raise_for_status()
    return response.json()


def analyze_resume_for_improvements(cv_text: str) -> str:
    """
    Analyze the resume and return the improvements.
    """
    return check_cv(cv_text)

