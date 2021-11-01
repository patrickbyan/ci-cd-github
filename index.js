const express = require('express')
const app = express()


app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get("/youtube", (req, res) => {
    res.send("Hello Youtube!")
})

module.exports = app