const express = require("express");
const cors = require("cors");
const config = require("../config");
const api = require("../api");

const { host, port } = config.http;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api", api);
app.get("/prueba", (req, res) => {
    res.json(req.body);
})

app.get("/", (req, res) => {
    res.send("<!DOCTYPE html><html lang='es'><head><meta charset='UTF-8'><meta http-equiv='X-UA-Compatible' content='IE = edge'><meta name = 'viewport' content = 'width=device-width, initial-scale=1.0'><title>Afiliados votantes</title><link href='https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css' rel='stylesheet' integrity='sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT' crossorigin='anonymous'></head><body><table class='table table-row text-center'><thead><tr><td>NIT</td><td>Nombre</td><td>Matrícula</td><td>Lugar</td><td>Biometría</td><td>Foto</td></tr></thead><tbody id='cuerpo'></tbody></table><script>const API1_URL = 'https://mongo-votaciones.herokuapp.com/api/votaciones'; const TABLA = document.getElementById('cuerpo');fetch(`${API1_URL}`).then((res)=>res.json()).then((votantes)=>{votantes.votaciones.forEach(voto => {TABLA.innerHTML += `<tr><td>${voto.nit}</td><td>${voto.nombre}</td><td>${voto.matricula}</td><td>${voto.lugar}</td><td><a href='${voto.biometria}' target='_blank'>ver biometría</a></td><td><a href='${voto.foto}' target='_blank'>ver foto</a></td></tr>`})})</script></body></html>");
})

const init = () => {
    app.listen(port, host, () => {
        console.log(`Server runing on http://${host}:${port}`);
    })
}

module.exports = { init };