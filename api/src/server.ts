import express from "express";
import connectDB from "./handler/db";
import { decksRoutes } from "./routes/decks.routes";

const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());

app.get("/", async (req, res) => {
  res.send("Server running");
});
app.use(decksRoutes);

//Database connection
connectDB()
  .then(() => {
    app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
  })
  .catch((err) => console.log(err));
