'use strict'

import indexTemplate from './index/index.html!text';
import page2template from './page2/page2.html!text';
import page3template from './page3/page3.html!text';
import page4template from './page4/page4.html!text';

function applicationRouteConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/home");

    $stateProvider
        .state('home', {
            url: "/home",
            template: indexTemplate,
            controller: 'Controller as ctrl'
        })
        .state('page2', {
            url: "/page2",
            template: page2template,
            controller: 'Controller2 as ctrl'
        })
        .state('page3', {
            url: "/page3",
            template: page3template,
            controller: 'Controller3 as ctrl'
        })
        .state('page4', {
            url: "/page4",
            template: page4template,
            controller: 'Controller4 as ctrl'
        })

}

applicationRouteConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

export default applicationRouteConfig;