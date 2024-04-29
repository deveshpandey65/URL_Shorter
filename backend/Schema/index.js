const mongoose=require('mongoose')

    const url_schema=new mongoose.Schema({
        sort_url:{
            type:String,
            required:true,
            unique:true,
        },
        real_url:{
            type: String,
            required: true,
        },
        clicks:{
            type:Number ,
            required:true,
        }
    })


module.exports={
    url_schema,
}