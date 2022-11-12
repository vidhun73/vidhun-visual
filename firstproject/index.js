const express= require("express")
const res= require("express/lib/response")
const path= require("path")
const bodyparser=require("body-parser")
const app=express()
app.use(bodyparser.json())
app.get("/home",(req,res)=>{
    res.status(200).sendFile(path.join(__dirname+"/public/index.html"))
})
app.get("/product/:pname/:price",(req,res)=>{
    const data=req.params
    console.log(data) 
    if(data.pname==="redmi"&& Number(data.price)===10000){
        res.send({price:10000,model:"redmi note 8 pro"}) 
    }
    else{
        res.send({price:111,model:"xxx"})
    }
app.get("/search",(req,res)=>{
    const data =req.query
    if(data.country==="india"&&data.state==="TN"){
        res.send({chennai:"marina"})
    }
res.send("dddddd")
})
app/post("/signup",(req,res)=>{
    console.log(req.body)
    res.send("sigup sucessfull")
})

app.listen(3000,()=>console.log("serverstart"))


})