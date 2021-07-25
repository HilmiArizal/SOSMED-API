const { User } = require('../Models');
const crypto = require('crypto');


module.exports = {

    register: async (req, res) => {
        try {
            const encryptedPassword = crypto.createHmac('sha256', "SECRET_KEY").update(req.body.password).digest("base64");

            const registerUser = new User({
                email: req.body.email,
                username: req.body.username,
                password: encryptedPassword
            })

            const saveUser = await registerUser.save();
            res.status(200).json(saveUser);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    login: async (req, res) => {
        try {
            const encryptedPassword = crypto.createHmac('sha256', "SECRET_KEY").update(req.body.password).digest("base64");

            const loginUser = await User.findOne({
                username: req.body.username
            });

            if (!loginUser) return res.status(404).json({ error: "User Not Found!" });
            if (loginUser.password !== encryptedPassword) return res.status(400).json({ error: 'Wrong Password!' });

            res.status(200).json(loginUser);
        } catch (err) {
            res.status(500).json(err);
        }
    }

}