
# Sharp Image Resizer API

- Simple API for resizing remote images
- Built with Express.js and [npm sharp](https://sharp.pixelplumbing.com/)
- Images processed in momory as Buffers




## Demo

http://localhost:3000/demo.html

Modify properties in `public/demo.html` to experiment with API options.
```
const resizeProps = {
      width:200,
      height:800,
      fit: "contain",
      cacheLength: 0
    } 
const imgUrl = "https://images.unsplash.com/photo-1546527868-ccb7ee7dfa6a"
```

## Run Locally

Clone the project

```bash
  git clone https://github.com/cantuket/sharp-resizer-api
```

Go to the project directory

```bash
  cd sharp-resizer-api
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```


## API Reference

#### Resize a single image

```http
  GET api/img-resize
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `width` | `integer` |  Set image desired width in pixels |
| `height` | `integer` |  Set image desired height in pixels |
| `fit` | `string` |  How the image should be resized/cropped to fit the target dimension(s), one of cover, contain, fill, inside or outside. |
| `cacheLength` | `integer` | Define `Cache-Control: max-age` of image in seconds |


