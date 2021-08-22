const express = require("express");
const app = express();

app.get("/bye", (req, res)=> {
    res.send("Bye bye");
});

app.get("/bye/:name", (req,res)=>{
    if(req.params.name === "Janet") {
        res.send("Finally, Janet! You're leaving!");
    }
    res.send(`Bye, ${req.params.name}`);
});

app.get("/health", (req, res)=> {
    res.send("healthy");
});

app.listen(80, () => {
    console.log("App listening on port 80!");
  });