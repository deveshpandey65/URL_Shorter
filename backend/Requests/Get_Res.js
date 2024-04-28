
let Get_Req=(app,url)=>{
    try {
        app.get('/link/:sortlink', async (req, res) => {
            const { sortlink } = req.params
            result = await url.findOne({ sort_url: sortlink })
            if (!result) {
                return res.status(402).json("Not F Found")
            }
            console.log(sortlink)
            return res.redirect(`https://${result.real_url}`)
           
        })
    }
    catch(err){
        console.log("error: ",err)
        return res.status(404).send("ERROR CAPTURED")
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