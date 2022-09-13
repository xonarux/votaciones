const fs = require("fs");
const { google } = require("googleapis");

const authenticateGoogle = () =>{
    const auth = new google.auth.GoogleAuth({
        keyFile : `${__dirname}/../credenciales.json`,
        scopes: "https://www.googleapis.com/auth/drive",
    });
    return auth
}

const uploadToGoogleDrive = async (file) =>{
    const auth = authenticateGoogle();
    const fileMetadata ={
        name: file.filename,
        parents: ["1c4WjutLC7rIy4-IrQVqyByY_ivOyylhh"],
    };
    const media = {
        mimetype: file.mimetype,
        body: fs.createReadStream(file.path),
    };
    const driveService = google.drive({version: "v3", auth});
    
    const response = await driveService.files.create({
        requestBody: fileMetadata,
        media: media,
        fields: "id",
    });
    return response;
}

module.exports={uploadToGoogleDrive}