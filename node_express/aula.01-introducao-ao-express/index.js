// Importando o Express na aplicação
const express = require("express") // CommonJS Modules
// Criando uma insância do Express
const app = express()

app.get("/", function(req, res) {
    res.send("Hellow, boas boas !")
})
// Iniciando o servidor da porta 8080


// CRIANDO A ROTA PRINCIPAL


app.listen(8080, function(error){
    if(error) {
        console.log(`Ocorreu um erro: ${error}`);
    } else {
        console.log("Servidor iniciado com sucesso");
    }
});