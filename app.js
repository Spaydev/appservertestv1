require("dotenv").config({ path: `./.env` })
const express = require("express")
const app = express()
const router = require("./routes/routeIndex")

app.use(express.json({ limit: "50mb" }))
app.use("/", router)


app.listen(3000, 'localhost', async () => {
    console.log(`App listening on port 3000!`)
})
