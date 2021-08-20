const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const routes = require("./src/routes/routes");
const database = require("./src/database/database.js");
const app = express();
const port = 3000;

app.use(helmet());
app.use(express.json());
app.use(cors());
database();
app.use("/", routes);

app.listen(port, () => {
	console.log(`listining on localhost:${port}`);
});
