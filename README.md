# MakeItWork

![Logo](./src/media/logo_small.png)

## Description

MakeItWork is a fun and exciting platform that helps you **improve your skills and build your career** using a **gamified approach**.

It is designed to provide **guidance** and **individualized support** with tailored learning paths to help you reach your career goals.
MakeItWork makes steps towards your career goals easy and fun, offering a unique blend of gamification and personalized learning experiences.


## How to

1. Signup and input your base information (Tell us about your skills, interests, and career goals)
2. Get a personalized learning path
3. In each category a set of challenges is presented to you
4. During each challenge a specific topic is covered and a new skill is learned
5. You get constant feedback and support
6. Have fun and collect trophies while paving **your path to success**

## Setup

install `requirements.txt` by running:
```bash
pip install -r requirements.txt
```

### Environment variables
you need the next keys stored in the environment variables:
- GPT_API_KEY
- MONGODB_PASSWORD

### To run the server
In the terminal (from the dragonhack-2024 directory), run:

```bash
uvicorn src.api.app:app --reload
```



## Infrastructure
