const { User } = require('../Models');


module.exports = {

    getAllUsers: async (req, res) => {
        try {
            const dataUser = await User.find();

            res.status(200).json(dataUser);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    getUserById: async (req, res) => {
        const userId = req.params.id;
        try {
            const dataUser = await User.findById(userId);
            
            res.status(200).json(dataUser);
        } catch (err) {
            res.status(500).json(err);
        }
    }

}