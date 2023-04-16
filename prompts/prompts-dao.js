import promptsModel from "./prompts-model.js";
export const findPrompts = () => promptsModel.find();
export const createPrompts =(prompt) => promptsModel.create(prompt);