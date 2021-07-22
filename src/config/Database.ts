import mongoose from "mongoose";
export class Database {
  constructor() {}

  public async connectToMongodb() {
    try {
      await mongoose.connect(
        "mongodb+srv://leejss:1234@cluster0.cjyxh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
        {
          useNewUrlParser: true,
          useFindAndModify: true,
          useUnifiedTopology: true,
        }
      );
      console.info("Mongodb Connected");
    } catch (error) {
      console.error("DB connection error: ", error);
    }
  }

  // public async connectToPg() {
  //   try {
  //   } catch (error) {}
  // }
}
