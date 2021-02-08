// this file is for uniformity of all the post we aare going to make ....
import mongoose from 'mongoose'


const postSchema = mongoose.Schema({

    Name: String,
    InstallationType: String,
    NumberOfTanks: String,
    InstallationPartner: String,
    DeviceUsed: String,
    DateCreated: Date

});

//2.. now that we have a schema lets create a model
const PostMessage = mongoose.model('PostMessage', postSchema);

//3.... now lets export the model so that we can run queries on it
export default PostMessage;