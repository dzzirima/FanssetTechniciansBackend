import express from 'express'
import bodyPaser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'



// initiatal configuration
const app = express()
dotenv.config()
app.use(bodyPaser.json({ limit: "300mb", extended: true }))
app.use(bodyPaser.urlencoded({ limit: "300mb", extended: true }))
app.use(cors())

import postRoutes from './routes/post.js'


app.use('/posts', postRoutes)
app.get('/', (req, res) => {
    res.send("Hello to memories Api");
})

const PORT = process.env.PORT;
const url = "mongodb://localhost:27017/FansetTechinicians"; // for local dev
process.env.MONGODB_URL

mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })

.then(() => app.listen(PORT, () => console.log(`server running on port : ${PORT}`)))
    .catch((error) => console.log(error.message))

mongoose.set('useFindAndModify', false);