const express = require("express") //requiring express package
const connectToDatabase = require("./database")
const app = express() // storing it in app app vanne variable throught use gareko
app.use(express.json())

connectToDatabase()




//  / ma gayo vane k dekhaune and request garepachhi response garnai parxa hai keta ho

app.get('/',(req,res)=>{
    res.send("hi there people")
})


app.post("/blog",(req,res)=>{
    console.log(req.body)
    res.status(200).json({
        massage : "blog api hit sucessfully"
    })
})



app.listen(3000, function(){
    console.log("port 3000 is sucessfully started")
})


//mongodb+srv://shahishisir087:<db_password>@cluster0.zgzr9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0