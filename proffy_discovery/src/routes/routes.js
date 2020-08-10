const { Router } = require('express');
const proffyController = require('../app/controller/proffyController');
const studyController = require('../app/controller/studyController');
const giveClassesController = require('../app/controller/giveClassesController');

const routes = Router();

routes.get('/', proffyController.index);

routes.get('/study', studyController.index);

routes.get('/give-classes', giveClassesController.index);
routes.post('give-classes', giveClassesController.store);

module.exports = routes;
