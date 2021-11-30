require("dotenv").config({ path: `./.env` })
const express = require("express")
const app = express()
const router = require("./routes/routeIndex")

// app.use(express.json({ limit: "50mb" }))
app.use("/", router)


app.listen( process.env.EXPRESS_PORT || 3000, async () => {
    console.log(`App listening on port ${process.env.EXPRESS_PORT}`)
})
