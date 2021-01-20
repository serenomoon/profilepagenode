const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
let idioma = ""
// const ingles = require("./ingles.json");
// const spanish = require("./spanish.json");

const app = express();
let lang = "eng";

app.set('view engine','ejs');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));


app.get("/",function(req,res){

    if (lang === "esp") { idioma = require("./spanish.json"); }
      else { idioma = require("./ingles.json");}

      res.render("index", {
        aboutmenu: idioma.menu[0],
        worksmenu: idioma.menu[1],
        contactmenu: idioma.menu[2],
        atitle: idioma.about.atitle,
        primerH1: idioma.about.aprimh1,
        primerH3: idioma.about.aprimh3,
        primerP: idioma.about.aprimP[0]+idioma.about.aprimP[1],
        primerP2: idioma.about.aprimP[2],
        movies: idioma.about.ahobbies[0],
        music: idioma.about.ahobbies[1],
        books: idioma.about.ahobbies[2],
        programming: idioma.about.ahobbies[3],
        works: idioma.about.aworks,
        cv : idioma.about.acv,
        cvlook : idioma.about.acvbutton
      });
});

app.get("/works",function(req,res){

  if (lang === "esp") {
     idioma = require("./spanish.json"); }
    else { idioma = require("./ingles.json");}

  res.render("works",{
    aboutmenu: idioma.menu[0],
    worksmenu: idioma.menu[1],
    contactmenu: idioma.menu[2],
    wtitle: idioma.works.wtitle,
    wprimerH1: idioma.works.wprimh1,
    wprimerH3: idioma.works.wprimh3,
    wsegH1: idioma.works.wsegh1,
    wprimerP1: idioma.works.wprimerp[0],
    wprimerP2: idioma.works.wprimerp[1]+idioma.works.wprimerp[2],
    wHtml1: idioma.works.html[0],
    wHtml2: idioma.works.html[1],
    wPython1: idioma.works.python[0],
    wPython2: idioma.works.python[1],
    wPhotoshop: idioma.works.photoshop,
    wPWorks: idioma.works.wpworks,
    pFlask: idioma.works.pflask,
    pTkinter1: idioma.works.ptkinter[0],
    pTkinter2: idioma.works.ptkinter[1],
    pBoardG1: idioma.works.pboardg[0],
    pBoardG2: idioma.works.pboardg[1],
    ofCorse1: idioma.works.ofcorse[0],
    ofCorse2: idioma.works.ofcorse[1]
  });
});

app.get("/contact",function(req,res){

  if (lang === "esp") {
    idioma = require("./spanish.json"); }
    else { idioma = require("./ingles.json");}

  res.render("contact",{
    aboutmenu: idioma.menu[0],
    worksmenu: idioma.menu[1],
    contactmenu: idioma.menu[2],
    cTitle: idioma.contactme.ctitle,
    cPrimH1: idioma.contactme.cprimh1
  });
});


app.post("/",function(req,res){
  if (req.body.lang === "ing") {
    lang = "ing";
  }
  if (req.body.lang === "esp") {
    lang = "esp";
  }
  res.redirect("/");
});


app.post("/works",function(req,res){
  if (req.body.lang === "ing") {
    lang = "ing";
  }
  if (req.body.lang === "esp") {
    lang = "esp";
  }
  res.redirect("/works");
});



app.listen(3000,function(){
  console.log("Server is running on port 3000");
});
