class Card {
  "value": string;
  "suit": string;
  "code": string;
}

class Deck {
  "deckId": string;
  "type": string;
  "shuffled": string;
  "remaining": number;
  "cards": Card[];
}

export { Deck, Card };
