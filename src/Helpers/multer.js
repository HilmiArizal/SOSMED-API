const multer = require('multer');
const fs = require('fs');

module.exports = {
    uploader: (destinationNamePrefix, fileNamePrefix) => {
        let defaultPath = './public';

        const storage = multer.diskStorage({
            destination: (req, file, cb) => {
                const directory = defaultPath + destinationNamePrefix;
                if(fs.existsSync(directory)) {
                    cb(null, directory);
                    console.log(directory, 'exists');
                }else{
                    fs.mkdir(directory,{recursive: true}, err => cb(err, directory))
                    console.log(directory, 'make');
                }
            },
            filename: (req, file, cb) => {
                let originalName = file.originalname;
                let ext = originalName.split('.');
                let fileName = `${fileNamePrefix}${Date.now()}.${ext[ext.length - 1]}`;
                console.log(fileName);
                cb(null, fileName);
            }
        })

        return multer({
            storage: storage
        })
    }
}