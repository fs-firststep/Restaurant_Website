 const express = require("express");
const path = require("path");
const hbs = require("hbs");   
const Register = require("./models/register");
const exp = require("constants");
const port = process.env.PORT || 3000;
require("./db/conn"); 

const static_path = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../templates/views");
const partial_path = path.join(__dirname, "../templates/partials");

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended : false}))
app.use(express.static(static_path));

app.set("view engine", "hbs"); 
app.set("views", template_path); 
hbs.registerPartials(partial_path);

app.get("/", (req, res) => {  
    // res.send("Hello World") instead of it res.render
       res.render("index")

});

app.get("/registration", (req, res) => {
    // res.send("Hello World") instead of it res.render
    res.render("registration")
    
});
app.post("/registration", async (req, res) => {
    
    const data = new Register({
        username : req.body.username,
        email : req.body.email,
        password : req.body.password,
        gender : req.body.gender,
        country : req.body.country
    })

    const result = await data.save();
    res.status(201).render("index");

    console.log(result); 
});

app.get("/login", (req, res) => {
       res.render("login")

});
app.post("/login", async (req, res) => {
    email = req.body.email ;
    password = req.body.password ; 

    const user = await Register.findOne({email : email});
    if( user.password == password)
     {
         res.status(201).render("index");
     }
    else{
        res.send("Invalid usernam and password !");
    }
});

app.listen(port, ()=> {
    console.log(`Server is running at port no ${port}`);
});  