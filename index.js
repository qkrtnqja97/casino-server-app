const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;
const textBodyParser = bodyParser.text({
    limit: "20mb",
    defaultCharset: "utf-8",
});

const { getSpinRoulette } = require("./utility.js");

app.use(
    cors({
        orign: " http://127.0.0.1:3000",
    })
);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.options("/", (req, res) => {
    res.header("Access-Control-Allow-Origin", "http://127.0.0.1:4000");
    res.header("Access-Control-Allow-Headers", "task");
    res.header("Access-Control-Allow-Methods", "GET");
    res.header("Access-Control-Allow-Methods", "POST");
    res.sendStatus(200);
});

app.get("/", textBodyParser, async function (req, res) {
    console.log("req.headers: ", req);

    let getSpin;

    switch (req.headers["task"]) {
        case "spin":
            getSpin = getSpinRoulette();
            break;
        default:
            null;
            break;
    }
    res.status(200).json({ getSpin });
});

app.listen(port, (err) => {
    if (err) {
        console.log("There was a problem: ", err);
        return;
    }
    console.log(`Server listening on http://localhost:${port}`);
});
