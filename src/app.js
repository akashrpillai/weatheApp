const express = require("express");
// const { dirname } = require("path");
const path = require('path');
const hbs = require('hbs');
const app = express();
const port = process.env.PORT || 3000;

// public static path 
const staticPath = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/views/partials");
app.set('view engine', 'hbs'); //if we were only using views
app.set('views', template_path);//for template and partials
hbs.registerPartials(partials_path);// for registeration of partials


app.use(express.static(staticPath));

// ---------------Routing -----------------------
app.get("/", (req, res) => {
    // res.send("Hello Welcome To Home Page");
    res.render("index");
});
app.get("/about", (req, res) => {
    // res.send("Hello Welcome To about Page");
    res.render("about");
});
app.get("/weather", (req, res) => {
    // res.send("Hello Welcome To weather Page");
    res.render('weather');
});
app.get("/about/*",(req,res)=>{
    res.render("404error",{
        errorMsg: "Oops! Page Not Found"
    });
})
app.get("/weather/*", (req, res) => {
    // res.send("Hello Welcome To weather Page");
    res.send('weather');
});
app.get("*", (req, res) => {
    // res.send("404 NoT FoUnD");
    res.render("404error",{
        errorMsg: "Oops! Page Not Found"
    });

});
app.listen(port, () => {
    console.log(`listning to port no ${port}`);
});
