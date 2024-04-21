from src.models.career_orientation import CareerOrientationModel
from src.models.constraints import CareerOrientationCategory
from src.models.quests import QuestModel
from src.models.user import UserModel

user_cv = '''
# Dragica Dragon

## Contact Information
- **Address**: 1234 Coding Lane, Ljubljana, Slovenia
- **Phone**: +386 40 123 456
- **Email**: dragica.dragon@dragonhack.com

## Objective
Aspiring Software Developer seeking to leverage a Bachelor's degree in Computer Science and a passion for coding to provide innovative solutions and contribute to team success.

## Education
**Bachelor of Science in Computer Science** - University of Ljubljana, Slovenia (2020 - 2024)

## Skills
- **Programming Languages**: Python, Java, C++
- **Web Development**: HTML, CSS, JavaScript
- **Databases**: SQL, MongoDB
- **Tools**: Git, Docker, Jenkins
- **Frameworks**: Django, Flask, Spring Boot

## Projects
**Machine Learning Project** - University of Ljubljana (2023)
- Developed a machine learning model to predict stock prices using Python and Scikit-learn.
- Achieved an accuracy of 85% on test data.

**Web Development Project** - Personal Project (2024)
- Created a personal blog using Django and Bootstrap.
- Implemented user authentication and CRUD operations for blog posts.

## Certifications
- **Oracle Certified Associate, Java SE 8 Programmer** - Oracle (2023)
- **Python for Data Science** - IBM (2024)

## Languages
- Slovenian (Native)
- English (Fluent)

## References
Available upon request
'''

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
        cv=user_cv
    )
]


def get_user() -> UserModel:
    return users[0]
