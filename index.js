import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import bodyParser from "body-parser"
import dotenv from "dotenv"
import morgan from "morgan"
import allRouter from "./router/author"

dotenv.config()
const app = express()
const port = 3000


mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('xxx'))

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.use(bodyParser.json({ limit: "50mb" }))
app.use(cors({
    origin: "*",
    methods: ['GET', 'POST']
}))
app.use(morgan("common"))

allRouter(app)
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})