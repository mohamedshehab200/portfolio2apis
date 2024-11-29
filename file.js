const express = require("express");
const bodyparser = require("body-parser");
const mongoose = require("mongoose");
const userRouter = require("./Routes/users")
const bookRouter = require("./Routes/books")



// استيراد النموذج الصحيح

const file = express();
file.use(bodyparser.json());

const uri = "mongodb+srv://mag:mag123@magcamp.p7nyv.mongodb.net/?retryWrites=true&w=majority&appName=magcamp";

// اتصال بقاعدة البيانات
const connectTodb = async () => {
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect(uri);
    console.log("Connected to database");
  } catch (error) {
    console.log("Error connecting to database:", error);
    process.exit(1); // إنهاء التطبيق في حال حدوث خطأ
  }
};


connectTodb()

file.use("/" , userRouter)
file.use("/" , bookRouter)

file.listen(9050, () => {
    console.log("Server is running on http://localhost:9050");
  });
  
  


//book Mangment apis - done

// secure our apis
//roles 














