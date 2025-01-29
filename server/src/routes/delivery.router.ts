import express, { Router, Request, Response } from 'express';
import {createDeliveryRecord, getDeliveries, getOptions} from "@/contollers/delivery.controller";

const router: Router = express.Router();


router.get('/options', getOptions)


router.get('/', getDeliveries)

router.post('/', createDeliveryRecord)

export default router;