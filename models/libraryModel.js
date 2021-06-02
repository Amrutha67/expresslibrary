var mongoose=require('mongoose')

var librarySchema=new mongoose.Schema(

    {
      bkName:{type:String,required:true},
      bkAuthor:{type:String,required:true},
      bkCategory:{type:String,required:true},
      bkPrice:{type:String,required:true}
    }
)

var libraryModel=mongoose.model('Libraries',librarySchema)
module.exports={libraryModel}
