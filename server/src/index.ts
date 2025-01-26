import config from './config/config'
import app from "@/app";
import 'reflect-metadata'

app.get('/', async (req, res)=>{
    res.send({message:"Hello World"});
})

app.listen(config.port, ()=>{
    console.log("Server running on port 3000");
})