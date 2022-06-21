import { Router } from "express";
import DeckController from "../controllers/DeckController";

const decksRoutes = Router();

decksRoutes.post("/deck", DeckController.create);

decksRoutes.get("/deck/:uuid", DeckController.open);

decksRoutes.put("/deck/:uuid/draw/:numberOfCards", DeckController.drawCards);

export { decksRoutes };
