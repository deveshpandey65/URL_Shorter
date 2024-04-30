
let Get_Req=(app,url)=>{
    try {
        app.get('/link/:sortlink', async (req, res) => {
            const { sortlink } = req.params;

            try {
                const result = await url.findOne({ sort_url: sortlink });

                if (!result) {
                    return res.status(404).json("Not Found");
                }

                let clicks = result.clicks || 0;

                clicks++;

                await url.updateOne(
                    { sort_url: sortlink },
                    { $set: { clicks: clicks } }
                );

                return res.redirect(`https://${result.real_url}`);
            } catch (err) {
                console.log("Error:", err);
                return res.status(500).send("Internal Server Error 500");
            }
        });
    } catch (err) {
        console.log("Error Occured :", err);
        return res.status(500).send("Internal Server Error");
    }

    

    try {
        app.get('/data', async (req, res) => {
           
            result = await url.find({})
            if (!result) {
                return res.status(402).json("Not Found")
            }
            return res.json(result)
        })
    }
    catch (err) {
        console.log("error: ", err)
        return res.status(404).send("ERROR CAPTURED")
    }


    

}


module.exports=Get_Req;