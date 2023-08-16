import express from "express";
import resizerRoutes from './resizer/router.js'

const router = express.Router()

router.use('/img-resize', resizerRoutes)

router.use('*', (req, res) => {
    res.status(400);
    res.send('Not found');
})

export default router