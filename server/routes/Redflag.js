import express from 'express';

import Redflag from '../controllers/Redflag';


// Express router
const router = express.Router();

router.post('/redflags', Redflag.create);
router.get('/redflags', Redflag.getAll);
router.get('/redflags/:id', Redflag.getOne);
router.patch('/red-flags/:id/location', Redflag.update);
router.patch('/red-flags/:id/comment', Redflag.update);

router.put('/redflags/:id', Redflag.update);
router.delete('/redflags/:id', Redflag.delete);


export default router;
