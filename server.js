const express = require("express");
const path = require("path");
const app = express();
app.use(express.static(path.join(__dirname, "build")));
app.get("/*", function (req, res) {
	console.log("caught route!");
	res.sendFile(path.join(__dirname, "build", "index.html"));
});
app.listen(4000, () => console.log("Listening on port 4000"));
