# This python script is for clearing my backend cache

import requests

response = requests.get('http://127.0.0.1:8000/api/rooms/')
if response.status_code == 200:
    rooms = response.json()['results']
    for room in rooms:
        id = room['id']
        r = requests.delete(f'http://127.0.0.1:8000/api/rooms/{id}')

