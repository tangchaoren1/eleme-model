import express from 'express';
import home from '../controller/home';
const router = express.Router();
router.post('/login', home.homeLogin);
export default router;