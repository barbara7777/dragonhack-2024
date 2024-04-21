import os
from dotenv import load_dotenv
from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi

from studentska_dela import all_jobs

load_dotenv()

mongodb_password = os.getenv('MONGODB_PASSWORD')

uri = f"mongodb+srv://evgenijjaa:{mongodb_password}@dragonhack.n5j4tn6.mongodb.net/?retryWrites=true&w=majority&appName=DragonHack"

client = MongoClient(uri)

# Select or create a database
db = client["DragonHack2024"]

# Select or create a collection within the database
collection = db["Jobs"]

# Insert data into the collection
jobs_to_insert = []
for key in all_jobs:
    jobs_to_insert.append(all_jobs[key])
collection.insert_many(jobs_to_insert)

