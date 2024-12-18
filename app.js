import express from "express"
import config from "config"
const app = express()
const PORT = config.get("PORT")  || 6000

app.get("/",(req,res)=>{
    try {
        res.status(200).json({msg:"hello world"})
    } catch (error) {
        res.status(500).json({msg:error})
        console.log(error);
    }
})

app.listen(PORT,()=>{
    console.log(`the server is running ${PORT}`);
})