import mongoose from 'mongoose'
import PostMessage from '../models/postJob.js'
import moment from 'moment'
import utils from '../utils/idgeneration.js'






// this is where all the logic of the routes is going to go
// more on status code :https://www.restapitutorial.com/httpsstatuscodes.html

export const getPosts = async(req, res) => {
    try {
        //get all the jobs posted ..
        const postMessages = await PostMessage.find() // await coz it might take timeto fetch all stuff
        res.setHeader('Access-Control-Expose-Headers', 'Content-Range');
        res.status(200).header({'Content-Range': `${postMessages.length}`}).json(postMessages);

    } catch (error) {
        res.status(404).json({ message:"not found" })
    }
}

export const createPosts = async(req, res) => {
    const post = req.body
        // check if all the fields were given....
    const newPost = new PostMessage(post) // creation of new post based on the model
    newPost.DateCreated = moment(new Date())
    newPost.id =utils.generateId()
   
    try {

        await newPost.save()
        res.status(201).json(newPost)
    } catch (error) {
        res.status(409).json({ message: error.message })

    }
}

export const updatePost = async(req, res) => {
    // get the id from the params
    // when destructuring objects we can actually rename the 
    const { id: _id } = req.params
    const post = req.body

    // check if the id is valid
    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with that id:')

    // create a new object and send it again

    const updatedPost = await PostMessage.findByIdAndUpdate(_id, {...post, _id }, { new: true }) // new is for us to get the updated document version

    res.json(updatePost)

}


export const deletePost = async(req, res) => {
    const { id: id } = req.params

    // foundPost = await PostMessage.findOne({ 'id': `${id}` })

    //if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with that id:')

    await PostMessage.findByIdAndRemove(( await PostMessage.findOne({'id':`${id}`}))._id)
    res.json({ message: 'Post deleted  successfully' })

}

export const likePost = async(req, res) => {
    const { id: id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with that id:')

    const post = await PostMessage.findById(id);
    const updatedPost = await PostMessage.findByIdAndUpdate(id, { likeCount: post.likeCount + 1 }, { new: true })

    

    res.json(updatedPost)

}
