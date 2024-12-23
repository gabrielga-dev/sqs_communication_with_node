import {Router} from "express";
import HelloController from "../adapter/api/controller/HelloController.js";

/**
 * @swagger
 * tags:
 *   name: Message
 *   description: APIs to send messages on the SQS queue.
 */
const helloRoutes = new Router();


/**
 * @swagger
 * /send-hello:
 *   post:
 *     tags: [Message]
 *     summary: Send hello message.
 *     description: Send a hello message through the SQS queue.
 *     responses:
 *       200:
 *         description: Message sent
 *       400:
 *         description: Message not sent
 */
helloRoutes.post('/send-hello', HelloController.sendHello);


export default helloRoutes;