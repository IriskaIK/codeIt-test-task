import config from './config/config'
import app from "@/app";
import 'reflect-metadata'

app.get('/', async (req, res)=>{
    res.send({message:"Server is ok."});
})

app.listen(config.port, ()=>{
    console.log("Server running on port " + config.port);
})