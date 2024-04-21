import requests
from bs4 import BeautifulSoup

"""
Scrape the Študentski servis website and extract basic info about jobs. 
"""

def extract_job_info(job) -> dict[str, str]:
    """
    Extracts info about one job.
    """

    job_info = {}

    titles = job.find_all('h5', class_="mb-0")
    new_titles = []
    for title in titles:

        title = str(title)
        start_index = title.find('>') + 1
        end_index = title.find('</')
        extracted_text = title[start_index:end_index]

        new_titles.append(extracted_text)
    job_info['Delo'] = ' - '.join(new_titles)

    if 'Plačilo' not in job_info:
        job_info['Plačilo'] = 'PO DOGOVORU'
        

    li_tags = job.find_all('li')
    li_tags = [str(tag).split('>') for tag in li_tags]
    li_tags = list(filter(lambda x: x[0] != '>', li_tags))
    li_tags = [[tag[:tag.find('<')] for tag in tags] for tags in li_tags]
    li_tags = [list(filter(lambda x: x != '' and '\n' not in x, tags)) for tags in li_tags]
    for elt in li_tags:
        if len(elt) > 1:
            if '€' in elt[0] and '€' in elt[1]:
                job_info['Plačilo'] = elt[0] + elt[1]
            else:
                job_info[elt[0]] = elt[1]
    
    description = job.find('p', class_='description text-break').text.strip()
    job_info["description"] = description
    return job_info


def jobs(page_number: int) -> dict[str, dict[str, str]]:
    """
    Extracts info about all jobs on one page.
    """

    if page_number == 0:
        url = "https://www.studentski-servis.com/studenti/prosta-dela/"
    if page_number >= 1:
        url = f"https://www.studentski-servis.com/studenti/prosta-dela/?scrolltop=1&kljb=&page={page_number}&isci=1&sort=&dm1s=1&hourlyratefrom=6.2&hourlyrateto=44&hourly_rate=6.2%3B44"

    response = requests.get(url)

    if response.status_code == 200:
        html_content = response.text
    else:
        print('Failed to fetch the web page')

    soup = BeautifulSoup(response.content, 'html5lib') 

    divs = soup.find_all('article', class_='job-item')

    all_jobs = {}

    div_counter = 0
    for div in divs:
        if div_counter == 0:
            # print(div)
            div_counter += 1
        job_info = extract_job_info(div)
        all_jobs[job_info['Delo'] + ' (' + job_info['Šifra: '] + ')'] = job_info

    return all_jobs

def merge_pages(page_numbers: int) -> dict[str, dict[str, str]]:
    """
    Joins info about jobs for multiple pages. 
    """

    all_jobs = {}
    for page_number in page_numbers:
        jobs_info = jobs(page_number)
        for key in jobs_info:
            all_jobs[key] = jobs_info[key]
    return all_jobs

all_jobs = merge_pages([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10])



