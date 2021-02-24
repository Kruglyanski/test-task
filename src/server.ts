const path = require('path')
import multer from 'multer'
const moment = require('moment')
const ImgLink = require('./models/ImgLink')
const mongoose = require('mongoose')
const express = require('express')
const config = require('config')
const app = express()
const PORT = config.get('port')



const storage = multer.diskStorage({

    destination:function(req, file, cb) {
        cb(null, 'src/uploads')
    },

    filename:function(req, file, cb) {
        const date = moment().format('DDMMYYYY-HHmmss_SSS')
        cb(null, `${date}-${file.originalname}`)
    }
})


app.use(express.json({extended: true}))
app.use('/api/auth', require('./routes/auth'))
app.use('/api/posts', require('./routes/posts'))
app.use(multer({storage}).single("image"))
app.post("/api/auth/upload", async function (req, res, next) {
    try {

        const avatar = req.file ? req.file.path : ''
        const userId= req.body ? req.body.userId : ''
        const imgLink = new ImgLink({avatar, userId})
        await imgLink.save()

        res.status(201).json({message: "Link Created"})

    } catch (e) {
        res.status(500).json({message: "Something went wrong, try again", ok: false})
    }
})

if (process.env.NODE_ENV === 'production') {
    app.use('/', express.static(path.join(__dirname, 'client', 'build')))

    app.get('*', (req,res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    } )
}
app.use('/uploads', express.static(__dirname + '/uploads'))
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

