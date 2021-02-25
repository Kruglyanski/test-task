const {Router} = require('express')
const router = Router()
const Post = require('../models/Post')


// /api/posts/fetchposts
router.get(
    '/fetchposts',
    async (req, res) =>{

        const isFlood = req.query.isFlood
        try {
            const posts = await Post.find({isFlood: isFlood})|| []
            res.json(posts)

        } catch (e) {
            res.status(500).json({message: "Something went wrong, try again", ok: false})
        }
    })
// /api/posts/deletepost
router.delete(
    '/deletepost',
    async (req, res) =>{

        const id = req.query.id
        console.log(id)
        try {
            await Post.findOneAndDelete({_id: id})

            res.json({ message: "Post deleted successfully", ok: true})

        } catch (e) {
            res.status(500).json({message: "Something went wrong, try again", ok: false})
        }
    })
// /api/posts/sendpost
router.post(
    '/sendpost',

    async (req, res) =>{
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
