import requests

r = requests.patch('http://127.0.0.1:8000/api/players/1/', data ={
    'displayName': "BRO"
    }) 
r = requests.post("http://127.0.0.1:8000/api/players/",data={
    "room": "sdf",
      "score": 0,
      "displayName":"asdf"
})
print(r.text)