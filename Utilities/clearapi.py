# This python script is for clearing my backend cache

import requests

response = requests.get('http://127.0.0.1:8000/api/players/')
if response.status_code == 200:
    rooms = response.json()['results']
    for room in rooms:
        url = room['url']
        # r = requests.delete(f'http://127.0.0.1:8000/api/rooms/{id}')
        r = requests.delete(url)

