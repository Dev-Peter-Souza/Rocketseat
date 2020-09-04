//Dados
const proffys = [
    { name: "Peter Souza",
     avatar:"https://avatars3.githubusercontent.com/u/56090380?s=460&u=125159fab14eb0f2e321f59a5e77685e7f81aa9b&v=4" ,
     whatsapp: "89905394",
      bio:"Entusiasta das melhores tecnologias.", 
      subject:"Análise e Desenvolvimento de Sistema", 
      cost :"120,00", 
      weekday : [0], 
      time_from: [720], 
      time_to: [1220]
    },
    { name: "Peterson Souza",
    avatar:"https://media-exp1.licdn.com/dms/image/C5603AQGAYKIG3bqbQQ/profile-displayphoto-shrink_200_200/0?e=1604534400&v=beta&t=Eod-I5tKzaisxQ6synPL2RujWHDz0R8JszDRzIShM3I" ,
    whatsapp: "89905394",
     bio:"Arquitetura de Sistema.", 
     subject:"Software Engineer", 
     cost :"200,00", 
     weekday : [0], 
     time_from: [720], 
     time_to: [1220]
   }

  
]

const subjects = [
    "HTML e CSS",
    "JavaScript",
    "Node",
    "Reacht",
    "Vue.js",
    "Kotlin",
    "UI e UX",
    ".NET",
    "SQL",
]

const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
]
// Funcionalidades da aplicação

function getSubject(subjectNumber) {
    const position = +subjectNumber - 1
   return subjects[position]
}

function pageLanding(req, res) {
    return res.render("index.html")
}

function pageStudy(req, res) {
    const filters = req.query 
    return res.render("study.html", { proffys, filters, subjects, weekdays })
}

function pageGiveClasses(req, res) {
    const data = req.query

    
    // se tiver dados
    const isNootEmpty = Object.keys(data).length > 0
     if (isNootEmpty) {

        data.subject = getSubject(data.subject)

    //adicionar dados ao objetos a lista de proffy
     proffys.push(data)    

     return res.redirect("/study")
     }
    

    // se não, mostrar a página
    return res.render("give-classes.html", {subjects, weekdays})
}

// Servidor
const express = require('express')
const server = express()


//configurar o nunjucks (template engine)
const nunjucks = require('nunjucks')
nunjucks.configure('src/views',{
    express: server,
    noCache:true,
})
//Inicio e configuração do Servidor
server
// configurar arquivo estático (css, scripts, imagens)
.use(express.static("public"))
// rotas da aplicação
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)

//Start do Servidor
.listen(5500)