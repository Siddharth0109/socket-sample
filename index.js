const express = require("express");
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.json(
        {
            "responseCode" : 200, 
            "message" : "Successful run of the node api"
        }
    )
})

app.listen(port, () => {
    console.log("Express server started");
})