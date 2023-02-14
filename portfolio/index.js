const express = require('express')
const app = express()
const port = 3002

app.set("view engine", "ejs")
app.use(express.static(__dirname + '/public'));

app.get('/', (req,res)=>{
    res.render("landing")
})


app.listen(port, ()=>
console.log("server running"))