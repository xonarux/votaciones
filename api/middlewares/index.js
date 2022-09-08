const multer = require("multer");
const path = require("path");

function uploadFile(){
    const storage = multer.diskStorage({
        destination: path.join(__dirname, "../../public"),
        filename: (req, file, cb) =>{
            cb(null, Date.now()+file.originalname);
        }
    })
    const upload1 = multer({storage}).array("biometria");

    return upload1
}

module.exports = uploadFile