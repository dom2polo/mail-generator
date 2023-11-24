//jshint eversion:6 
const express = require("express"); 
const bodyParser = require("body-parser"); 
const https = require("https");

var sender = ""; 
var name = ""; 
var email = ""; 
var note = ""; 

const app = express(); 

app.use(express.static("public")); 
app.use(bodyParser.urlencoded({extended:true})); 


app.set('view engine', 'ejs'); 

app.get("/", function(req, res) {
    // res.sendFile(__dirname + "/index.html"); 

        // logic code 
        var today = new Date();

        var options = {
            weekday: "long",
            day: "numeric", 
            month: "long"
        };
    
        var day = today.toLocaleDateString("en-US", options);
    
        var DearUser = "Dear " + name; 
        var EndingNote = "Sincerely, " + sender; 
        res.render('list', { 
            kindOfDay: day, 
            userName: DearUser,
            emailRecipient: email,
            userNote: note, 
            endNote: EndingNote
        });
    
});



app.post("/", function(req, res) {
    
    sender = req.body.senderName; 
    name = req.body.fullName; 
    email = req.body.senderEmail;
    note = req.body.emailNote; 

    console.log("Note successfully transferred...");
    console.log("Sender name : " + sender);
    console.log("User name   : " + name);
    console.log("User email  : " + email);
    console.log("User note   : " + note);

    res.redirect("/"); 


    // const jsonData = JSON.stringify(data);
// app.post("/sent", function() {
//     res.write("Dear " + name + ","); 
//     res.write("     " + note); 
//     res.end(); 
//     })
})

app.listen(3000, function(req, res) {
    console.log("server is running on port 3000");
})