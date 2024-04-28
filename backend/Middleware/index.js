const express=require('express')
let middle=(app)=>{
    app.use(express.urlencoded({extended:false}))
}

module.exports=middle;