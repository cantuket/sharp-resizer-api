import express from 'express'
import http from 'http'
import cors from 'cors'
import bodyParser from 'body-parser'
import restRoutes from './api/rest.js'
import { config } from 'dotenv'
config()

const app = express()
const httpServer = http.createServer(app)

app.use(cors())
app.options('*', cors())
app.use(bodyParser.json({limit: '500mb'}))
app.use(bodyParser.urlencoded({limit: '500mb', extended: true, parameterLimit: 50000}))

app.use('/api', restRoutes)
app.use(express.static('public'))
app.use('*', (req, res) => {
    res.status(400);
    res.send('Not found');
})

const port = process.env.PORT || 3000
await new Promise((resolve) => httpServer.listen({ port }, resolve))
console.log(`Server running on: http://localhost:${port}`)

