import {Router} from "express";
import HelloController from "../port/controller/HelloController.js";

const helloRoutes = new Router();
helloRoutes.post('/send-hello', HelloController.sendHello);


export default helloRoutes;