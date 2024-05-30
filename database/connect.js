const mongoose = require("mongoose");
const DB_URL = "mongodb://localhost:27017/pindie";

async function connectToDatabase() {
  try {
    await mongoose.connect(DB_URL);
    console.log("Успешно подключились к MongoDB");
  } catch (err) {
    console.log("Ошибка при подключении к MongoDB");
    console.error(err);
  }

  await mongoose.connect(DB_URL);
}

module.exports = connectToDatabase;
