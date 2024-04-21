import requests
from bs4 import BeautifulSoup

location = "Ljubljana"
job = "Software Engineer"

def find_jobs(job: str, location: str) -> list[dict[str, str]]:
    """
    Find jobs based on the job title and location.
    """
    url = f'https://www.linkedin.com/jobs/search?keywords={job.replace(" ", "%20")}&location={location.replace(" ", "%20")}&pageNum=0'
    response = requests.get(url)

    available_jobs = []

    if response.status_code == 200:
    
        soup = BeautifulSoup(response.text, 'html.parser')
        job_listings = soup.find_all('div', {'class':'job-search-card'})
        for job in job_listings:
            title = job.find('h3', {'class': 'base-search-card__title'}).text.strip()
            company = job.find('a', {'class': 'hidden-nested-link'}).text.strip()
            location = job.find('span', {'class': 'job-search-card__location'}).text.strip()
            anchor_tag = job.find('a', class_='base-card__full-link')
            href_link = anchor_tag['href']

            print(f"Title: {title}\nCompany: {company}\nLocation: {location}\nJob Link: {href_link}\n")

            available_jobs.append({
                "Title": title,
                    "Company": company,
                    "Location": location,
                    "Job Link": href_link
            })

    return available_jobs

def find_learning_opportunities(keyword) -> list[dict[str, str]]:
    """
    Find learning opportunities on LinkedIn Learning.
    """

    keyword = keyword.replace(" ", "%20")

    url = f'https://www.linkedin.com/learning/search?keywords={keyword}&trk=content-hub-search-desktop_learning-search-bar_search-submit&upsellOrderOrigin=homepage-learning_learning-search-bar_search-submit'
    

    response = requests.get(url)

    available_courses = []

    if response.status_code == 200:

        soup = BeautifulSoup(response.text, 'html.parser')
        course_listings = soup.find_all('li', {'class':'results-list__item'})
        
        for course in course_listings:

            title = course.find('h3', {'class': 'base-search-card__title'}).text.strip()
            created_by = course.find('h4', {'class': 'base-search-card__subtitle'}).text.strip()
            duration = course.find('div', {'class': 'search-entity-media__duration'}).text.strip()
            anchor_tag = course.find('a', class_='base-card__full-link')

            if anchor_tag:
                href_link = anchor_tag['href']
            else:
                print("Anchor tag not found.")
            print(f"Title: {title}\nCreated By: {created_by}\nDuration: {duration}\nCourse Link: {href_link}\n")

            available_courses.append({
                "Title": title,
                "Created By": created_by,
                "Duration": duration,
                "Course Link": href_link
            })
        return available_courses
    

available_jobs = find_jobs(job, location)
available_courses = find_learning_opportunities('python')