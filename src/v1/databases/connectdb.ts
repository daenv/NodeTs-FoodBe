const mongoose = require("mongoose");
const uri = process.env.MONGO_URI;

// fix strictQuery
mongoose.set("strictQuery", false);
// connect mongoose
mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to Mongoose seccesfully ................"))
  .catch((err: any) => console.error(`Error: ${err}`));
module.exports = mongoose;
