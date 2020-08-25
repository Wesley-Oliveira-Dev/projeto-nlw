// Servidor
const express = require('express')
const server = express()

// usando as functions exportadas da page.js
const { pageLanding, pageStudy, pageGiveClasses, saveClasses } = require('./pages.js')

//importar o Nunjucks
const nunjucks = require('nunjucks')
//congigurar nunjucks (templates engine)
nunjucks.configure('src/views',{
    express: server,
    noCache: true,
})

// Inicio e configura
server
//receber os dados do req.body (para não mostrar dados no URL)
.use(express.urlencoded({extended:true}))
//congifurar arquivos staticos (Css, scripts, imagens)
.use(express.static("public"))
//rotas da aplicação
.get("/", pageLanding)
.get("/study", pageStudy) 
.get("/give-classes", pageGiveClasses)
// .post para poder receber os dados por method="post", 
.post("/save-classes", saveClasses)
//start do servidor
.listen(5500)