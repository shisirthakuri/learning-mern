const express = require("express") //requiring express package
const app = express() // storing it in app app vanne variable throught use gareko


app.set("view engine", "ejs")

//  / ma gayo vane k dekhaune and request garepachhi response garnai parxa hai keta ho

app.get('/',(req,res)=>{
    res.send("home")
})

app.get('/about',(req,res)=>{
    res.render("this is the about section ")


})

app.get('/contact', function(req,res){
    res.send("this is the contact page")
})




app.listen(3000, function(){
    console.log("port 3000 is sucessfully started")
})
