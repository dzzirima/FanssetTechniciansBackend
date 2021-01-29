// this file is for uniformity of all the post we aare going to make ....
 import mongoose from 'mongoose'


const postSchema  = mongoose.Schema({
    title:String,
    message:String,
    creator:String,
    // this is an array of strings
    tags:[String],

    selectedFile:String, // the image which we will upload will be converted to string base64
    likeCount:{
        type:Number,
        default:0
    },
    createdAt:{
        type:Date,
        default:new Date()
    }

});

//2.. now that we have a schema lets create a model
const PostMessage = mongoose.model('PostMessage',postSchema);

//3.... now lets export the model so that we can run queries on it
export default PostMessage;
