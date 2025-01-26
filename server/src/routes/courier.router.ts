import express, { Router, Request, Response } from 'express';
import {getCouriers} from "@/contollers/courier.controller";

const router: Router = express.Router()


router.get('/', getCouriers)

export default router;