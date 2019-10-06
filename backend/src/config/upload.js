const multer = require('multer');
const path = require('path');

module.exports = {
    storage: multer.diskStorage({
        // __dirname: diretório atual
        // fieldname: nome original vindo do cliente
        destination: path.resolve(__dirname, '..', '..', 'uploads'),
        filename: (req, file, cb) => {
            const ext = path.extname(file.originalname);
            const name = path.basename(file.originalname, ext);

            cb(null, `${name}-${Date.now()}${ext}`)
        },
    }),
};
