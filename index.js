const express = require("express");
const routes = require("./routes/start");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(express.json());
app.use("/", routes);
app.use(cors());

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
