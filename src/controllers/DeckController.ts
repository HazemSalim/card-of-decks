import { Request, Response } from "express";
import { v4 as uuidV4 } from "uuid";
import DeckModel from "../models/Deck";
import { CARDS_FULL_DECK, CARDS_SHORT_DECK } from "../handler/Constants";
import { Deck, Card } from "./Classes";
import { ShuffleList } from "../handler/Util";

export default module.exports = {
  async create(request: Request, response: Response) {
    const { type, shuffled } = request.body;

    let cards: any;
    let remaining: number;

    if (type === "FULL") {
      cards = CARDS_FULL_DECK;
      remaining = 52;
    } else {
      cards = CARDS_SHORT_DECK;
      remaining = 36;
    }

    if (shuffled) ShuffleList(cards);

    const deck: Deck = await DeckModel.create({
      deckId: uuidV4(),
      shuffled,
      type,
      remaining: remaining,
      cards: cards,
    });

    return response.json({
      deckId: deck.deckId,
      type: deck.type,
      shuffled: deck.shuffled,
      remaining: deck.remaining,
    });
  },

  async open(request: Request, response: Response) {
    const { uuid } = request.params;

    const deck: Deck = await DeckModel.findOne({ deckId: uuid });

    if (!deck)
      response.status(404).json({ error: "The Deck ID not found or invalid" });

    return response.json(deck);
  },

  async drawCards(request: Request, response: Response) {
    const { uuid, numberOfCards } = request.params;

    const numberOfCardsInt = Number.parseInt(numberOfCards);

    const deck: Deck = await DeckModel.findOne({ deckId: uuid });

    if (!deck)
      response.status(404).json({ error: "The Deck ID not found or invalid" });

    const resultCards: Card[] = deck.cards.splice(0, numberOfCardsInt);

    deck.remaining = deck.cards.length;

    await DeckModel.findOneAndUpdate({ deckId: uuid }, deck);

    return response.json(resultCards);
  },
};
