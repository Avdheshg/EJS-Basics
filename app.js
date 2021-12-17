//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");   
const ejs = require("ejs");

const homeStartingContent = "Lacus vel facilisis volutpat est velit egestas dui id ornare. Semper auctor neque vitae tempus quam. Sit amet cursus sit amet dictum sit amet justo. Viverra tellus in hac habitasse. Imperdiet proin fermentum leo vel orci porta. Donec ultrices tincidunt arcu non sodales neque sodales ut. Mattis molestie a iaculis at erat pellentesque adipiscing. Magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Odio euismod lacinia at quis risus sed vulputate odio ut. Cursus mattis molestie a iaculis at erat pellentesque adipiscing.";
const aboutContent = "Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Non diam phasellus vestibulum lorem sed. Platea dictumst quisque sagittis purus sit. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Mauris in aliquam sem fringilla. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Amet massa vitae tortor condimentum lacinia quis vel eros. Enim ut tellus elementum sagittis vitae. Mauris ultrices eros in cursus turpis massa tincidunt dui.";
const contactContent = "Scelerisque eleifend donec pretium vulputate sapien. Rhoncus urna neque viverra justo nec ultrices. Arcu dui vivamus arcu felis bibendum. Consectetur adipiscing elit duis tristique. Risus viverra adipiscing at in tellus integer feugiat. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Consequat interdum varius sit amet mattis. Iaculis nunc sed augue lacus. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Pulvinar elementum integer enim neque. Ultrices gravida dictum fusce ut placerat orci nulla. Mauris in aliquam sem fringilla ut morbi tincidunt. Tortor posuere ac ut consequat semper viverra nam libero.";

const app = express(); 

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

let arr = [];

app.get("/", function(req, res) {
    res.render("home", {Content1HTML: homeStartingContent, arrHTML: arr});
});

app.get("/about", function(req, res) {
    res.render("about", {aboutContentHTML: aboutContent});
});

app.get("/contact", function(req, res) {
    res.render("contact", {contactContentHTML: contactContent});
});   
 
app.get("/compose", function(req, res) {
    // console.log("title " + compose.title);
    // console.log("postEntered " + compose.textarea);
    // res.render("compose", {titleHTML: title, postEnteredHTML: postEntered});
    res.render("compose");
});

app.post("/compose", function(req, res) {
    const textEntered = req.body.textEntered;
    title = textEntered;
    postEntered = req.body.postEntered;

    const compose = {
      title: title,
      textarea: postEntered
    }

    arr.push(compose);
    
    // res.render("compose", {titleHTML: title, postEnteredHTML: postEntered});
    // res.render("compose", {composeHTML: compose});
    res.redirect("/");

    // var count = 0;
    // console.log("=================");
    // arr.forEach(function(item) {
    //   console.log((++count) + ": title : " + item.title + "\ntextrea " + item.textarea);
    // })
});


// Creating the route parameters
app.get("/posts/:postName", function(req, res) {
    
    const postNameEntered = req.params.postName;
    console.log("URL : " + postNameEntered);

    arr.forEach(function(item) {
        if (item.title === postNameEntered) {
          console.log("For " + item.title + ": Match found");
          res.render("post", {postNameHTML: item});
        } else {
          console.log("For " + item.title + ": Not a match");
        }
    });
  
    /**
     * Grab the url entered
     * loop through the array and find does it have any same title
     * if yes then render the post page with details
     */
});



app.listen(3000, function() {
  console.log("Server started on port 3000");
});











































