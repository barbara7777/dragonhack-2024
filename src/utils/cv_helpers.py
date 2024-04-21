def upload_cv(cv_id: str) -> str:
    """
    Reads the cv with the cv_id from the file and returns it as a string
    """
    try:
        with open(f'./src/database/{cv_id}.txt', 'r') as file:
            return file.read()
    except FileNotFoundError():
        return "CV not found"