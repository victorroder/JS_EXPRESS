// Importando o Express na aplicação
const express = require("express") // CommonJS Modules
// Criando uma insância do Express
const app = express()

app.get("/", function(req, res) {
    res.send("<h1>Hello BEM VINDO</h1><br>")
})
// ROTA PERFIL 
// :nome é um parâmetro obrigatório 
app.get("/perfil/:nome",(req, res) =>{
    const nome = req.params.nome
res.send(`Olá, ${nome}! Seja bem-vindo`)
})
app.get("/videos", (req, res) => {
    res.send("<h1>Página de vídeo</h1>")
})


// Iniciando o servidor da porta 8080



app.listen(8080, (error) => {
    if(error) {
        console.log(`Ocorreu um erro: ${error}`);
    } else {
        console.log("Servidor iniciado com sucesso");
    }
});