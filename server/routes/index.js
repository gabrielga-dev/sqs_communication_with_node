import {Router} from 'express';
import helloRoutes from "./HelloRoutes.js";

const routes = new Router();

routes.use('/', helloRoutes);

export default routes;