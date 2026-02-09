const express = require("express");
const cors = require("cors");
const fileUpload = require("express-fileupload");
require("dotenv").config();

const speakingRoutes = require("./routes/speakingRoutes");
const learningRoutes = require("./routes/learningRoutes");


const app = express();
const FRONTEND_URL = process.env.FRONTEND_URL;

app.use(cors());



app.use(express.json());

app.use(fileUpload({
  useTempFiles: true,
  tempFileDir: "/tmp/"
}));

app.use("/api/speaking", speakingRoutes);
app.use("/api/learning", learningRoutes)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
