const express = require("express");
const cors = require("cors");
const fileUpload = require("express-fileupload"); 
require("dotenv").config();

const speakingRoutes = require("./routes/speakingRoutes");

const app = express();

app.use(cors());
app.use(express.json());
app.use(fileUpload()); 

app.use("/api/speaking", speakingRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
