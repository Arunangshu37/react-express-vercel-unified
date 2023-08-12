import express from 'express';
import { getItem } from './services/itemService.js';
var router = express.Router();

router.post('/items', getItem);

export default router;