const mongoose = require("mongoose");
try {
  mongoose.connect("mongodb+srv://azxxe323:a900900900@cluster0.nxwcw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });
  console.log("Database Connected Successfully");
} catch (err) {
  console.log("Database Not Connected");
}
