# Deck of Cards API

## Description

Node API with Express and MongoDB database for a deck of cards.

## CD API

## Run

To generate node_modules:
`npm install`

To run the project in development mode:
`npm run dev`

To run Test Cases
`npx jest`

Heroku Live API

https://card-of-decks.herokuapp.com/

Create a new Deck
[POST]
http://localhost:5000/deck

Request:
{
"type": "FULL",
"shuffled": true
}

Response:
{
"deckId": "90fdb765-94a7-47ec-9815-e57d7a9d4bc1",
"type": "FULL",
"shuffled": "true",
"remaining": 52
}

---

---

Open a Deck
[GET]
Resquest:
http://localhost:5000/deck/90fdb765-94a7-47ec-9815-e57d7a9d4bc1

Response:
{
"\_id": "62b1536e9959947567dbae2a",
"deckId": "90fdb765-94a7-47ec-9815-e57d7a9d4bc1",
"type": "FULL",
"shuffled": "true",
"remaining": 52,
"cards": [
{
"value": "JACK",
"suit": "CLUBS",
"code": "JC",
"_id": "62b1536e9959947567dbae2b"
},
{
"value": "8",
"suit": "HEARTS",
"code": "8H",
"_id": "62b1536e9959947567dbae2c"
},
{
"value": "7",
"suit": "CLUBS",
"code": "7C",
"_id": "62b1536e9959947567dbae2d"
},
...
],
"\_\_v": 0
}

---

---

Draw a Card
[PUT]
Resquest:
localhost:5000/deck/90fdb765-94a7-47ec-9815-e57d7a9d4bc1/draw/3

Response:

[
{
"value": "7",
"suit": "CLUBS",
"code": "7C",
"_id": "62b1536e9959947567dbae2d"
},
{
"value": "JACK",
"suit": "SPADES",
"code": "JS",
"_id": "62b1536e9959947567dbae2e"
},
{
"value": "6",
"suit": "DIAMONDS",
"code": "6D",
"_id": "62b1536e9959947567dbae2f"
}
]
