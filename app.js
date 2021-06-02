var express=require('express')
var bodyParser=require('body-parser')
var mongoose=require('mongoose')
var { libraryModel } = require('./models/libraryModel')


mongoose.connect("mongodb+srv://amru78:@amru@cluster0.1mnsm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",{useNewUrlParser:true})

var app=express()
app.use(bodyParser.urlencoded({ extended: false }))
 app.use(bodyParser.json())

app.get('/read',(req,res)=>{

    res.send("Library details")

})
app.get('/view',async(req,res)=>{

    try{
        var result=await libraryModel.find()
        res.json(result)
    }
    catch(error){
        res.send(error)
    }
})

app.post('/library',(req,res)=>{

    var libraryObject=new libraryModel(req.body);
    libraryObject.save()
  res.json(libraryObject)
})

app.post('/search',async (req,res)=>{
    try{
        var result=await libraryModel.find(req.body)
        res.json(result)
       }
    catch(error){
        res.json({"status":"error"})
    }
})

app.post('/edit',async(req,res)=>{
    try{
        var result= await libraryModel.findOneAndUpdate({"_id":req.body._id},req.body)
        res.json(result)
    }

    catch(error){
        res.json({"status":error})
    }
})


app.post('/delete',async(req,res)=>{

    try{
        var result=await libraryModel.findByIdAndDelete({"_id":req.body._id})
        res.json(result)
    }
    catch(error){
        res.json({"status":error})
    }
})

app.listen(  process.env.PORT|| 3000,()=>{
    console.log("running  ")
})