const { uploader } = require("../Helpers/multer");
const { Profile } = require("../Models");


module.exports = {

    getProfile: async (req, res) => {
        try {
            const dataProfile = await Profile.find();

            res.status(200).send(dataProfile);
        } catch (err) {
            res.status(500).send(err);
        }
    },

    getProfileByUserId: async (req, res) => {
        const userId = req.query.userId;
        try {
            const dataProfile = await Profile.find({ userId });

            res.status(200).send(dataProfile);
        } catch (err) {
            res.status(500).send(err)
        }
    },

    addProfile: async (req, res) => {
        try {
            const path = '/fileprofile';
            const upload = uploader(path, 'IMG').fields([{ name: 'image' }]);
            upload(req, res, (err) => {
                if (err) return res.status(500).send(err);

                const { image } = req.files;
                const imagePath = image ? `${path}/${image[0].filename}` : null;

                const data = JSON.parse(req.body.data);
                data.imageprofile = imagePath;

                const newProfile = new Profile(data);
                try {
                    const savedProfile = newProfile.save();
                    res.status(200).send(savedProfile)
                } catch (err) {
                    res.status(500).send(err)
                }
            })
        } catch (err) {
            console.log(err);
        }
    },

    editProfile: async (req, res) => {
        var ObjectID = require('mongodb').ObjectID;
        try {
            const path = '/fileprofile';
            const upload = uploader(path, 'IMG').fields([{ name: 'image' }]);
            upload(req, res, (err) => {
                if (err) return res.status(500).send(err);

                const { image } = req.files;
                const imagePath = image ? `${path}/${image[0].filename}` : null;

                const data =  JSON.parse(req.body.data);
                data.imageprofile = imagePath;

                Profile.updateOne(
                    { "_id": ObjectID(req.query.id) },
                    { $set: data },
                    function (err, results) {
                        if (err) {
                            res.status(500).send(err)
                        } else {
                            res.status(200).send(results);
                        }
                    }
                );
            })
        } catch (err) {
            console.log(err);
        }
    }

}