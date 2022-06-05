const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 8080


app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "/comming-soon.html"))
});


app.listen(port, () => {
    console.log("App listening at " + port)  
})