
from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
import os
from dotenv import load_dotenv

from database.studentska_dela import all_jobs

load_dotenv()

mongodb_password = os.getenv('MONGODB_PASSWORD')

uri = f"mongodb+srv://evgenijjaa:{mongodb_password}@dragonhack.n5j4tn6.mongodb.net/?retryWrites=true&w=majority&appName=DragonHack"

# Create a new client and connect to the server
client = MongoClient(uri, server_api=ServerApi('1'))

# Select or create a database
db = client["DragonHack2024"]

# Select or create a collection within the database
collection = db["Jobs"]

jobs_to_insert = []
for key in all_jobs:
    jobs_to_insert.append(all_jobs[key])
result = collection.insert_many(jobs_to_insert)

