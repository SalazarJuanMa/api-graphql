import mongoose, { connection, mongo } from "mongoose";

export async function connect() {
  try {
    await mongoose.connect(
      process.env.MONGO_URI,
      {useNewUrlParser: true, useUnifiedTopology: true}
    );
    console.log(".... DB is connected....");
  } catch(e) {
      console.log('Something goes wrong.');
      console.log(e);
  }
}
