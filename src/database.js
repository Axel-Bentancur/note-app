const mongoose = require("mongoose");

const { MONGODB_HOST, MONGODB_DATABASE } = process.env;
const MONGO_URI = `mongodb://${MONGODB_HOST}/${MONGODB_DATABASE}`;

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then((db) => console.log("dbs connected"))
  .catch((err) => console.log(err));
