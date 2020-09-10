const express = require('express')
const routes = express.Router();
const multer = require('multer')
const multerConfig = require ('../src/config/multer/multer')





const usuarioControllers = require ('./controllers/usuarioControllers');
const eventosControllers = require ('./controllers/eventoControllers')
const projetoControllers = require ('./controllers/projetoControllers');
const profileControllers = require ('../src/controllers/profileControllers')
const imgControllers = require ('./controllers/imgControllers');
const session = require ('./controllers/sessionControllers')



const test = require('./controllers/test')

routes.post('/img',  multer(multerConfig).single('file'), imgControllers.create)





/** Rotas para o usuário  */
routes.post('/users', usuarioControllers.create);
routes.get('/users', usuarioControllers.index);
routes.get('/users/eventos', profileControllers.eventos)
routes.get('/users/projetos',profileControllers.projetos)
routes.post ('/session', session.create)


/** Rotas para os eventos */
routes.post('/eventos', eventosControllers.create);
routes.get('/eventos', eventosControllers.index);
routes.delete('/eventos/:id', eventosControllers.delete)

/** Rotas para os projetos */
routes.post('/projetos', projetoControllers.create);
routes.get('/projetos', projetoControllers.index);
routes.delete('/projetos/:id', projetoControllers.delete)



//DEPLOY_TEST

routes.get('/', test.index)

module.exports=routes;



