import express from 'express';
import { login, profile, admin } from '../controller/authController.mjs';
import { authenticateJWT } from '../middleware/authJwtMiddleware.mjs';

const router = express.Router();

router.post('/login', login);
router.get('/profile', authenticateJWT, profile);
router.get('/admin', authenticateJWT, admin);

export default router;
