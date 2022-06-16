const express = require("express");
const app = express();
const personRoutes = require("./src/routes/personRoutes");
const connectdb = require("./src/connections/connectDB");

app.use(express.json());
app.use("/person", personRoutes);

app.get("/", (req, res) => {
    return res.json({ msg: "Hello world" });
});
connectdb();
const port = 3000;
app.listen(port, () => {
    console.log("🚀 server is running.");
});
