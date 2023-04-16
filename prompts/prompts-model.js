import mongoose from "mongoose";
import promptsSchema from "./prompts-schema.js"
const promptsModel = mongoose.model('promptsModel',promptsSchema);
export default promptsModel;