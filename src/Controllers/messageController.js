const { Message } = require('../Models');


module.exports = {

    addMessage: async (req, res) => {
        const addMessage = new Message(req.body);
        try {
            const savedMessage = await addMessage.save();
            res.status(200).send(savedMessage);
        } catch (err) {
            res.status(500).send(err);
        }
    },

    getMessage: async (req, res) => {
        try{
            const getMessage = await Message.find({
                conversationId: req.params.conversationId,
            });
            res.status(200).send(getMessage);
        }catch(err){
            res.status(500).send(err);
        }
    }

}