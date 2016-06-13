import angular from 'angular';
import 'angular-ui-router';
import 'angular-material';
import 'angular-material/angular-material.css!';

import routeConfig from './routes/ui-router';
import controller from './controllers/controller1';
import controller2 from './controllers/controller2';
import controller3 from './controllers/controller3';
import controller4 from './controllers/controller4';

import itemservice from "./services/itemsServices";

var app = angular.module('myModule', ['ui.router', 'ngMaterial']);

app.config(routeConfig);

app.controller('Controller', controller);
app.controller('Controller2', controller2);
app.controller('Controller3', controller3);
app.controller('Controller4', controller4);

app.service('ItemServices', itemservice);

app.constant('config', {
    apiUrl: './data.json'
});