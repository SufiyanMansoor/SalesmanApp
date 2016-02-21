
var UserModel1 = require("./DBRepo/UserModel");
var routes=require("./routes/general");
var path=require("path");
var express=require("express");
var http=require("http");
var mongoose=require('mongoose');
var passport=require('passport');
var LocalStrategy=require('passport-local').Strategy;
var bodyParser=require('body-parser');
var app=express();

app.set("port",8000);

var staticDIR = path.resolve(__dirname, "./static");
app.use(express.static(staticDIR));
app.use(bodyParser.json());

app.use(function(req,res,next){
   //next();
    if (req.query.token) {
        UserModel1.findUser({ FirebaseToken: req.query.token })
            .then(function (dbUser) {
            if (dbUser) {
                req.user = dbUser;
                next();
            }
        }, function (err) {
            next(err);
        });
    }
    else {
        next();
    } 
    
    });
    
app.use("/api",  routes);
app.get("*", function (req, res) {
    var indexViewPath = path.resolve(__dirname, "./static/");
    res.sendFile(indexViewPath);
}); 
 app.listen(app.get("port"), function () {
    console.log("Server in listening state on " + app.get("port"));
});
mongoose.connect("mongodb://localhost/data");   
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    