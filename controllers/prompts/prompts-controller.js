import * as promptsDao from '../../prompts/prompts-dao.js'

const PromptsController = (app) =>{
    app.get('/api/prompts', findPrompts);
    app.post('/api/prompts', createPrompts);
}

const createPrompts = async (req,res) =>{
    const newPrompts = req.body;
    const insertedPrompts = await promptsDao.createPrompts(newPrompts);
    res.json(insertedPrompts);
}

const findPrompts = async (req, res) =>{
    const prompts = await promptsDao.findPrompts();
    res.json(prompts);
}

export default PromptsController;