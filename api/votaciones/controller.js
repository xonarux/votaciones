const uploadFile = require("../middlewares");
const Votacion = require("./model");

const list = async (req, res) =>{
    const votaciones = await Votacion.find();
    res.status(200).json({votaciones})
}

const createVotacion = async (req, res) =>{
    console.log(req.body);
    const {nit, nombre, matricula, lugar} = req.body;
    console.log(req.files);
    const biometria = req.files[0];
    const foto = req.files[1];

    const votoFound=await Votacion.find({nit})
        if(votoFound.length===0){
            const votox = {
                nit, nombre, matricula, lugar, biometria:biometria.path, foto: foto.path
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