import { Router } from 'express';
import multer from 'multer'
import multerConfig from './config/multer'
import authMiddlewares from './app/middlewares/auth'
import UserController from './app/controllers/UserController'
import SessionController from './app/controllers/SessionController';
import FileController from './app/controllers/FileController'
import SchoolController from './app/controllers/SchoolController';
import SubscribeController from './app/controllers/SubscribeController';

const routes = new Router();
const upload = multer(multerConfig)

routes.post('/users',UserController.store)
routes.post('/sessions',SessionController.store)
routes.use(authMiddlewares)
routes.put('/users',UserController.update)
routes.post('/files',upload.single('file'),FileController.store)
routes.post('/school',SchoolController.store)
routes.post('/subscription',SubscribeController.store)

export default routes;
