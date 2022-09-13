const fs = require("fs");
const Votacion = require("./model");
const {uploadToGoogleDrive} = require("../../googleDriveServices/googleDriveServices")

const list = async (req, res) =>{
    const votaciones = await Votacion.find();
    res.status(200).json({votaciones})
}

const createVotacion = async (req, res) =>{
    //console.log(req.body);
    const {nit, nombre, matricula, lugar} = req.body;
    //console.log(req.files);
    const biometria = req.files[0];
    //console.log(biometria.mimetype.split("/")[1])
    if (biometria.mimetype.split("/")[1]=="pdf"){
        var linkBiometria = await uploadToGoogleDrive(biometria)
        setTimeout(()=>console.log(/*linkBiometria*/),1000)
        const foto = req.files[1];
        var linkFoto = await uploadToGoogleDrive(foto)
        setTimeout(()=>console.log(/*linkFoto*/),1000)
    }
    else{
        var linkFoto = await uploadToGoogleDrive(biometria)
        setTimeout(()=>console.log(/*linkBiometria*/),1000)
        const foto = req.files[1];
        var linkBiometria = await uploadToGoogleDrive(foto)
        setTimeout(()=>console.log(/*linkFoto*/),1000)
    }
    
    const enlace = "https://drive.google.com/file/d/";

    const votoFound=await Votacion.find({nit})
        if(votoFound.length===0){
            const votox = {
                nit, nombre, matricula, lugar, biometria:`${enlace}${linkBiometria.data.id}`, foto: `${enlace}${linkFoto.data.id}`
            }

            const newVoto = new Votacion(votox);
            newVoto.save().then(createdVoto=>{
                res.status(200)
            })

        }else{
            res.status(400).json({error: "Ese afiliado ya realizó su votación"});
        }
        
    }
    



module.exports = {
    list, createVotacion
}