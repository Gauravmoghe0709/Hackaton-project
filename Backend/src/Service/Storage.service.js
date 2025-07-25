var ImageKit = require("imagekit");


var imagekit = new ImageKit({
    publicKey: process.env.IMAGEKIT_PUBLIC,
    privateKey: process.env.IMAGEKIT_PRIVATE,
    urlEndpoint: process.env.IMAGEKIT_URL
});


function uploadfile(file) {
    return new Promise((resolve, reject) => {

        imagekit.upload({
            file: file.buffer,
            fileName:Math.random().toString().substring(6),
        }, (error, result) => {
            if (error) {
                reject(error)
            } else {
                resolve(result)
            }
        })
    })
}


module.exports = uploadfile