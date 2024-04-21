from openai import OpenAI
import os
from dotenv import load_dotenv

load_dotenv()

TOKEN = os.getenv('GPT_API_KEY')
BASE_URL = "https://openai-proxy.sellestial.com/api"


def ask_openai(prompt: str, system_prompt=None) -> str:
    """
    Ask OpenAI for a response to the prompt.
    """
    client = OpenAI(api_key=TOKEN, base_url=BASE_URL)

    messages = []
    if system_prompt:
        message = {"role": "system", "content": system_prompt}
        messages.append(message)

    messages.append({"role": "user", "content": prompt})

    completion = client.chat.completions.create(
        model="gpt-4-turbo",
        messages=messages
    )

    return completion.choices[0].message.content


if __name__ == "__main__":
    # test the function
    prompt = '''
    What is DragonHack?
    '''
    print(ask_openai(prompt))
