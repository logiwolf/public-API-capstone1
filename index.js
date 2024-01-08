import express from 'express';
import axios from 'axios';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;
const API_URL = "https://v2.jokeapi.dev/";

app.use(bodyParser.urlencoded({extended: true }));

app.get("/", (req, res) => {
    res.render("index.ejs", {content: "API Response."})
});

app.post("/any", async(req,res) => {
    const name = req.body.id;
    try{
        const response = await axios.get(API_URL + "/joke/any?blacklistFlags="+name );
        const result = response.data;
        res.render("index.ejs", {content: result});
            //JSON.stringify(result.data)}
    }catch(error){
        res.status(404).send(error.message);
    }
});

//this is MISC
app.post("/Misc", async(req,res) => {
    //const name = req.body.name;
    try{
        const response = await axios.get(API_URL + "/joke/misc" );
        const result = response.data;
        res.render("index.ejs", {content: result});
            //JSON.stringify(result.data)}
    }catch(error){
        res.status(404).send(error.message);
    }
});

//this is programming
app.post("/Programming", async(req,res) => {
    //const name = req.body.name;
    try{
        const response = await axios.get(API_URL + "/joke/programming" );
        const result = response.data;
        res.render("index.ejs", {content: result});
            //JSON.stringify(result.data)}
    }catch(error){
        res.status(404).send(error.message);
    }
});

//this is dark
app.post("/Dark", async(req,res) => {
    //const name = req.body.name;
    try{
        const response = await axios.get(API_URL + "/joke/dark" );
        const result = response.data;
        res.render("index.ejs", {content: result});
            //JSON.stringify(result.data)}
    }catch(error){
        res.status(404).send(error.message);
    }
});

//this is pun
app.post("/Pun", async(req,res) => {
    //const name = req.body.name;
    try{
        const response = await axios.get(API_URL + "/joke/pun" );
        const result = response.data;
        res.render("index.ejs", {content: result});
            //JSON.stringify(result.data)}
    }catch(error){
        res.status(404).send(error.message);
    }
});

app.listen(port, () => {
    console.log(`server is running ${port} port`);
  })
