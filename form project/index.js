import express from "express";
import bodyParser from "body-parser";


const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}))

app.get("/", (req,res) => {
    res.render("index.ejs");
})

app.post("/submit", (req,res) => {
    const firstName = req.body['Fname'].length;
    const lastName = req.body['Lname'].length;

    const numOfLetters = firstName + lastName;
    res.render("index.ejs", {letterNum: numOfLetters});
})

app.listen(port, () => {
    console.log(`server running on port ${port}`)
});