var express = require("express");

var app = express();

// app.get("/", (req, res) => {
//     res.send("Home");
// });

app.get("/", (req, res) => {
    res.send("GET REQUEST");
});

app.post("/about", (req, res) => {
    res.send("POST REQUEST")
});

//Sirve mas de contexto...
app.put("/contact", (req, res) => {
    res.send("PUT RESQUEST");
})

//Sirve para eliminar usuario o productos...
app.delete("/delete", (req, res) => {
    res.send("DELETE REQUEST")
})

app.listen(3000, () => {
    console.log("Server running");
});