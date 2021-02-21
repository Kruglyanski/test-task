const mongoose = require('mongoose')
const express = require('express')
const config = require('config')

const app = express()
const PORT = config.get('port')

app.get('/', (request, response) => {
    response.send('Helloooooo!')
})

async function start() {
    try {
        await mongoose.connect(config.get('mongoUri'),{
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true

        })
        app.listen(PORT, () => console.log(`App has been started on port ${PORT}!!!`))
    } catch (e) {
        console.log('Server ERROR', e.message)
        process.exit(1)
    }
}

start()
