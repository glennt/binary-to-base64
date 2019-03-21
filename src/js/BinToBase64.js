const {Base64Encode} = require('base64-stream');
const fs = require('fs');

function convertFileToBase64(file) {

    let stream = fs.createReadStream(file);

    let writeStream = fs.createWriteStream(file + '.txt');


    let ret = stream.pipe(new Base64Encode()).pipe(writeStream);

    return new Promise((res, rej) => {
        ret.on('finish', () => res() )

        ret.on('error', (err) => rej(err));
    });

}


module.exports = {
    convertFileToBase64
}