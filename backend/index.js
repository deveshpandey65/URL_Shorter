const connection=require('./connection')
const Schema=require('./Schema')
const cors = require('cors');
const url = require('./Module').url
const express=require('express')
const app=express();
const PORT=8000;
const Post_Req=require('./Requests/Post_Res')
const Get_Req=require('./Requests/Get_Res')
const middle=require('./Middleware')
const nanoId = require('nano-id');

connection();
// middle(app);
// Post_Req(app,url);
Get_Req(app,url)
app.use(cors());
app.use(express.urlencoded({ extended: false }))
app.use(cors({
    origin: 'http://192.168.85.1:3000'
}));
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});



app.post('/api/data', async (req, res) => {
    try {
        const str = await nanoId(6);
        const { real_url1 } = req.body;
        const abc = await url.findOne({ sort_url: str })
        if (abc) {
            res.send("DUPLICATE ENTRY Recieved/")
        }
        await url.create({ sort_url: str, real_url: real_url1, clicks: 0 });
        return res.status(201).json(str);
    } catch (error) {
        console.error("Error : ", error);
        return res.status(500).send("ERROR CAPTURED:");
    }
});



app.listen(PORT, (req, res) => {
    console.log("SERVER STARTED at port:",PORT)
})



