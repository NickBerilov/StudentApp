import express from 'express';

import { list, add, edit, remove } from '../controllers/students.controller';

const router = express.Router();

router.get('/all', list);
router.post('/new', add);
router.post('/:userId', edit);
router.delete('/:userId', remove);

export default router;
