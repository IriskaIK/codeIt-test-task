import express, { Router, Request, Response } from 'express';
import {getDestinations} from "@/contollers/destination.controller";

const router: Router = express.Router();


router.get('/', getDestinations);

export default router;
