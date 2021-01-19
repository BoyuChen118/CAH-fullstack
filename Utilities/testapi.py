import requests

r = requests.patch('http://127.0.0.1:8000/api/players/1/', data ={
    'displayName': "BRO"
    }) 
r = requests.post("http://127.0.0.1:8000/api/players/",data={
    "room": "sdf",
      "score": 0,
      "displayName":"asdf"
})
r = requests. get("https://raw.githubusercontent.com/BoyuChen118/CAH-fullstack/master/CAHapp/cah-cards-compact.json")
r = requests.get("http://127.0.0.1:8000/api/rooms")
print(r.text)