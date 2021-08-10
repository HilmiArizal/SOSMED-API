const { User } = require('../Models');


module.exports = {

    getAllUsers: async (req, res) => {
        try {
            const dataUser = await User.find();

            res.status(200).send(dataUser);
        } catch (err) {
            res.status(500).send(err);
        }
    },

    getUserById: async (req, res) => {
        const userId = req.params.id;
        try {
            const dataUser = await User.findById(userId);
            
            res.status(200).send(dataUser);
        } catch (err) {
            res.status(500).send(err);
        }
    },

    getUserPostById: async (req, res) => {
        const userId = req.params.userId;
        try {
            const dataUserPost = await User.findById(userId);

            res.status(200).send(dataUserPost);
        } catch (err) {
            res.status(500).send(err);
        }
    }

}