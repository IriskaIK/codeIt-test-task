import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import {AppDataSource} from "@/db/data-source";
import deliveryRouter from "@/routes/delivery.router";
import courierRouter from "@/routes/courier.router";
import destinationsRouter from "@/routes/destinations.router";


AppDataSource
    .initialize()
    .then(() => {
        console.log("App Data Source initialized");
    })
    .catch((err) => {
        console.error("Error while initializing", err);
    })

const app = express();

app.use(bodyParser.json());
app.use(cors({
    origin: "*",
    credentials: true,
}));

app.use('/deliveries', deliveryRouter)
app.use('/couriers', courierRouter);
app.use('/destinations', destinationsRouter)


export default app;