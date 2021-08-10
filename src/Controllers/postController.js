const { uploader } = require('../Helpers/multer');
const { Post } = require('../Models');


module.exports = {

    addPost: (req, res) => {
        try {
            const path = '/filepost';
            const upload = uploader(path, 'FILE').fields([{ name: 'file' }]);
            upload(req, res, (err) => {
                if (err) return res.status(500).send(err);

                const { file } = req.files;
                const filePath = file ? `${path}/${file[0].filename}` : null;

                const data = JSON.parse(req.body.data);
                data.file = filePath;

                const newPost = new Post(data);
                try {
                    const savedPost = newPost.save();
                    res.status(200).send(savedPost);
                } catch (err) {
                    res.status(500).send(err);
                }
            })
        } catch (err) {
            console.log(err);
        }
    },

    getPost: async (req, res) => {
        try {
            const getPost = await Post.find();
            res.status(200).send(getPost);
        } catch (err) {
            res.status(500).send(err);
        }
    },

    deletePost: async (req, res) => {
        try {
            const postId = req.query.postId;
            const getPost = await Post.findById(postId);
            await getPost.deleteOne();
            res.status(200).send(getPost);
        } catch (err) {
            res.status(500).send(err);
        }
    }

}