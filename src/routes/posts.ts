const {Router} = require('express')
const router = Router()
const Post = require('../models/Post')


// /api/auth/fetchposts
router.get(
    '/fetchposts',
    async (req: any, res: any) =>{
        console.log('req.params', req.query)

        const isFlood = req.query.isFlood
        try {
            const posts = await Post.find({isFlood: isFlood})|| []
            res.json(posts)

        } catch (e) {
            res.status(500).json({message: "Something went wrong, try again", ok: false})
        }
    })
// /api/auth/sendpost
router.post(
    '/sendpost',

    async (req: any, res: any) =>{
        try {

            const {text, userName, avatar, isFlood} = req.body

            const date = Date.now()
            const post = new Post({text, userName, avatar, date, isFlood})
            await post.save()
            res.json(post)
        } catch (e) {
            res.status(500).json({message: "Something went wrong, try again", ok: false})
        }

    })


module.exports = router
