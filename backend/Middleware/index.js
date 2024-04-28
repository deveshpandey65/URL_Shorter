
const express = require('express');
const cors = require('cors');
let middle=(app)=>{
    app.use(cors());
    app.use(express.urlencoded({extended:false}))
    app.use(cors({
        origin: 'http://localhost:3000'
    }));
   
    
}

module.exports=middle;