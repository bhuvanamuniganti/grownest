const express = require("express");
const cors = require("cors");
const fileUpload = require("express-fileupload");
require("dotenv").config();

const speakingRoutes = require("./routes/speakingRoutes");
const learningRoutes = require("./routes/learningRoutes");
const practiceImageRoutes = require("./routes/practiceImage");

const app = express();

/* ---------- MIDDLEWARE ---------- */
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://grownest.netlify.app",
    ],
    credentials: true,
  })
);


app.use(express.json());

app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);

/* ---------- ROUTES (ISOLATED) ---------- */
app.use("/api/speaking", speakingRoutes);
app.use("/api/learning", learningRoutes);
//app.use("/api/practice-image", practiceImageRoutes);

/* ---------- START SERVER ---------- */
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
