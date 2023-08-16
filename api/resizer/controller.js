import sharp from "sharp";
import axios from 'axios'
import path from 'path'

export async function resizeOne({url, resizeParams }) {
    try {
        const response = await axios.get(url, { responseType: 'arraybuffer' });
        const imageBuffer = Buffer.from(response.data);

        const contentType = response.headers['content-type'];
        const imageFormat = (
            contentType?.split('/')[1] ||
            path.extname(url)?.slice(1) ||
            '.jpg'
        );

        const resizedImageBuffer = await sharp(imageBuffer)
            .resize(resizeParams)
            .toFormat(imageFormat)
            .toBuffer();

        return { buffer: resizedImageBuffer, format: imageFormat };
      } catch (err) {
        throw new Error('Error resizing image: ' + err.message);
    } 
}