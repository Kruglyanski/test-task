const {Router} = require('express')
const router = Router()
const User = require('../models/User')
const bcrypt = require('bcryptjs')
const {check, validationResult} = require('express-validator')
const jwt = require('jsonwebtoken')
import  config from 'config'


// /api/auth/register
router.post(
    '/register',
    [
        check('email','Incorrect email').isEmail(),
        check('password','Minimal length of password is 6 symbols')
            .isLength({min: 6})
    ],
    async (req: any, res: any) =>{
        try {

            const errors = validationResult(req)

            if (!errors.isEmpty()) {
                return res.status(400).json({errors: errors.array(), message: "Incorrect registration data"})
            }
            const {email, password, name} = req.body

            const candidate = await User.findOne({email: email})

            if (candidate) {
                return res.status(400).json({message: "User is already exists"})
            }

            const hashedPassword = await bcrypt.hash(password, 12)
            const user = new User({email, password: hashedPassword, name})
            await user.save()
            res.status(201).json({message: "User successfully created"})
        } catch (e) {
            res.status(500).json({message: "Something went wrong, try again"})
        }
    })
// /api/auth/login
router.post(
    '/login',
    [
        check('email','Incorrect email').normalizeEmail().isEmail(),
        check('password','Enter password').exists()

    ],

    async (req: any, res: any) =>{
        try {

            const errors = validationResult(req)

            if (!errors.isEmpty()) {
                return res.status(400).json(({errors: errors.array(), message: "Incorrect login data"}))
            }
            const {email, password} = req.body

            const user = await User.findOne({email: email})

            if(!user) {
                return res.status(400).json({ message: "Incorrect login data"})
            }
            const isMatch =  await bcrypt.compare(password, user.password)

            if(!isMatch) {

                return res.status(400).json({ message: "Incorrect login data"})
            }

            const token = jwt.sign(
                {userId: user.id},
                config.get('jwtSecret'),
                {expiresIn: '1h'}
            )
            res.json({token, userId: user.id})
        } catch (e) {
            res.status(500).json({message: "Something went wrong, try again"})
        }

    })

module.exports = router
