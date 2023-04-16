import mongoose from 'mongoose';
const schema = mongoose.Schema({
    character: String,
    House: String,
    Vibe: String,
    emailid: String,
    prompt:String
}, {collection: 'Prompts'});
export default schema;