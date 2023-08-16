import express from "express";
import { resizeOne } from './controller.js'
import { formatSharpParams } from '../../utils/sharp-resizer.js'
const router = express.Router()

router.get('/', async (req, res) => {
    const { query } = req
    const { url, cacheLength, ...resizeParams } = query

    try {
        let formattedParams = formatSharpParams(resizeParams)

        const { buffer:resizedImageBuffer, format } = await resizeOne({ 
            url, 
            resizeParams: formattedParams
        });
    
        res.setHeader('Content-Type', `image/${format}`);
        res.setHeader('Cache-Control', `public, max-age=${cacheLength ? parseInt(cacheLength) : '604800'}`);
        res.send(resizedImageBuffer);
    } catch (err) {
        console.error(err);
        res.status(500).send('An error occurred resizing image.');
    }
})

router.use('*', (req, res) => {
    res.status(400);
    res.send('Not found');
})

export default router
