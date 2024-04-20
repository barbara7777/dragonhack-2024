# dragonhack-2024

![Logo](./src/media/logo_small.png)

# SETUP
install `requirements.txt` by running:
```bash
pip install -r requirements.txt
```

## To access internal APIs
you need the have keys stored in the environment variables:
- GPT_API_KEY

## To access external APIs
In the terminal (from the dragonhack-2024 directory), run:

```bash
uvicorn src.api.app:app --reload
```
