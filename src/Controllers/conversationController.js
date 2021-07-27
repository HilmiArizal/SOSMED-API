const { Conversation } = require("../Models");


module.exports = {

    newConversation: async (req, res) => {
        const newConversation = new Conversation({
            members: [req.body.senderId, req.body.receiverId],
        });

        try {
            const savedConversation = await newConversation.save();
            res.status(200).send(savedConversation);
        } catch (err) {
            res.status(500).send(err);
        }
    },

    getConversation: async (req, res) => {
        try {
            const getConversation = await Conversation.find({
                members: { $in: [req.params.userId] },
            });
            res.status(200).send(getConversation);
        } catch (err) {
            res.status(500).send(err);
        }
    }

}