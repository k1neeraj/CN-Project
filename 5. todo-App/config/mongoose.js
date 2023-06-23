
const mongoose = require("mongoose");
mongoose.set('strictQuery', false);
const mongoDB = "mongodb://127.0.0.1/ToDo_db"; 
main().catch(err => console.log(err));
async function main() {
  await mongoose.connect(mongoDB);
  console.log('Database is Connected');
}