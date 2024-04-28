const nanoId = require('nano-id');


const Post_Req = (app, url) => {
    app.post('/api/data', async (req, res) => {
        try {
            const str = await nanoId(6);
            const { real_url1 } = req.body;
            const abc= await url.findOne({ sort_url: str })
            if(abc){
                res.send("DUPLICATE ENTRY")
            }

            await url.create({ sort_url:str , real_url: real_url1});
            return res.status(201).json(str);
        } catch (error) {
            console.error("Error : ", error);
            return res.status(500).send("ERROR CAPTURED");
        }
    });
};

module.exports = Post_Req;
