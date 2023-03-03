const express = require("express");
const bodyParser = require("body-parser");
const getDate = require("./date");
const date = require(__dirname + "/date.js");

const app = express();
// must be used after const app = express; this is the EJS View Engine
// you must also create a Views directory and put in it all the .ejs files
app.set('view engine', 'ejs');

//this is to allow our local public files to be used by express
app.use(express.static("public"));

//to be able to use the body-parser
app.use(bodyParser.urlencoded({extended: true}));

//////////////////////////////////////////////////////////////////////////

//create an array list to store the new items
var itemsList = ["check to do list"];
var itemsListWork =[];

app.get("/", function(req, res){

    let day = date.getDate();

    //call the .render method with: page u want to render + JS Object var
    //in here we have 2 Objects: 
    //1) kindofday which get its value from above date function
    //2) newItems which get its value from array list above
    res.render ('list', {listTitle : day, newItems : itemsList});
});

app.post("/", function(request,response){

    console.log(request.body);

    //store the value the user adds in the form
    let item = request.body.newItem;

    //request.body.submit  - submit is the name of the button and work is the value - check list.ejs
    if (request.body.submit === "work") {
        itemsListWork.push(item);
        response.redirect("/work");
    } else {
        //push it the array 
        itemsList.push(item);
        //note we cannot render the response here. We add it to the res.render above
        //here we simply send the user to home page
        response.redirect("/");
    }
     
});


app.get("/work", function(req, res){
    let day = date.getDay();
    res.render ('list', {listTitle : "work on " + day , newItems : itemsListWork});
});


app.get("/about", function(req, res){
    res.render ('about');
});

//use the method .listen to listen to http traffic on eg. port 3000
app.listen(3000, function(){
    console.log("Server started on port 3000");
});
