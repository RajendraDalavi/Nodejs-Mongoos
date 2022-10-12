
const bodyParser = require("body-parser");
var express = require("express");
var app = express();
var mongoose = require("mongoose");


app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: "true" }));
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/mongoosedb");

var db = mongoose.connection;
db.on("error",(err)=>{
    console.log(err);
});

db.on("open",()=>{
    console.log("connection success");
});


app.get("/", (req, res) => {
    res.send("hello world");
});

app.use("/country",require("./routes/country"));
app.use("/state",require("./routes/state"));





app.listen(8081, () => {
    console.log("server running at http://localhost:8081");
});