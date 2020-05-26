const express = require ('express')
const routes = express.Router()
const revenue = require('./controllers/revenue')
const revenues = require('./controllers/revenues')

routes.get("/revenue", revenue.index)
routes.get("/revenues/create", revenues.create)
routes.get("/revenues/:id", revenues.show)
routes.get("/revenues/:id/edit", revenues.edit)

routes.post("revenues", revenues.post)
routes.put("revenues", revenues.put)
routes.delete("revenues", revenues.delete)
