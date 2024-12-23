import {Router} from 'express';
import helloRoutes from "./HelloRoutes.js";
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "../adapter/api/swagger/swagger.js";

const routes = new Router();

routes.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
routes.use('/', helloRoutes);

export default routes;