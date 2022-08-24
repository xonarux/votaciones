const Votacion = require("./model");

const list = async (req, res) =>{
    const votaciones = await Votacion.find();
    res.status(200).json({votaciones})
}

const createVotacion = async (req, res) =>{
    const {nit, nombre, lugar, voto} = req.body;
    const votoFound=await Votacion.find({nit})
        if(votoFound.length===0){
            const votox = {
                nit, nombre, lugar, voto
            }

            const newVoto = new Votacion(votox);
            newVoto.save().then(createdVoto=>{
                res.status(200).json({createdVoto});
            })
        }else{
            res.status(400).json({error: "Ese afiliado ya realizó su votación"});
        }
    }
    



module.exports = {
    list, createVotacion
}