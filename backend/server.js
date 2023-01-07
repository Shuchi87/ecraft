const app = require("./app");

const dotenv = require("dotenv");
//const connectDatabase = require("./config/database");
const connectDatabase = require("./config/database");


//Config


dotenv.config({ path: "backend/config/config.env" });

// Connecting to database
connectDatabase()

const PORT = process.env.PORT;
app.listen(process.env.PORT, () => {
    console.log(`Server is working on http://localhost:${process.env.PORT}`);
  });
  