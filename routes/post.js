// all the routing iis going to be handled from here
import express from 'express'

import { getPosts, createPosts, updatePost, deletePost, likePost } from '../controllers/posts.js'


const router = express.Router()


router.get('/', getPosts)
router.post('/', createPosts)



// these ones not yet implemented
router.patch('/:id', updatePost)
router.delete('/:id', deletePost)
router.patch('/:id/likePost', likePost)


export default router