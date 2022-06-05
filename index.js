const express = require('express');
const path = require('path');
const app = express();


app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "/comming-soon.html"))
});


app.listen(8080, () => {
    console.log("App listening at 8080")  
})