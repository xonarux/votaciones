const mongoose = require("mongoose");
const collection = "votaciones";

const votacionSchema = {
    nit: {type: Number, required:true},
    nombre: {type: String, required:true},
    matricula: {type: String, required:true},
    lugar: {type: String, required:true},
    biometria: {type: String, required:true},
    foto: {type: String, required:true},
}
const options ={
    timestamps:true,
}

const schema = new mongoose.Schema(votacionSchema, options);

const Votacion =  mongoose.model(collection, schema);

module.exports = Votacion;