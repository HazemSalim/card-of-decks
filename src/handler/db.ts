import mongoose from "mongoose";

const connectDB = async () => {
  const dbURI =
    "mongodb+srv://hazemusr:fEEG7pst2grR1sAU@cluster0.ehwaq.mongodb.net/cards?retryWrites=true&w=majority";

  return await mongoose
    .connect(
      dbURI /*{
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }*/
    )
    .then((result) => {
      console.log("MongoDB connected");
    })
    .catch((err) => console.log(err));
};

export default connectDB;
