const express = require('express')
const nunjucks = require('nunjucks')

const dataRevenues = require('./data')

const server = express()

server.set("view engine", "njk")

server.use(express.static('public'))

nunjucks.configure("views", {
    express:server,
    noCache:true,
})

server.get('/', function(req, res){
    res.render('index', { datas: dataRevenues })
})

server.get('/about', function(req, res){
    res.render('about')
})

server.get('/revenues', function(req, res){
    res.render('revenues', { datas: dataRevenues })
})

server.get('/revenues/:index', function(req, res){
    const revenues = dataRevenues;
    const revenueIndex = req.params.index;

    if (revenueIndex > revenues.length) {
        res.send('revenue not found')
    } else {
        res.render('revenue', { data: revenues[revenueIndex] })
    }

})

server.listen(2200, function(){
    console.log("server is running")
})