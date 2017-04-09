angular.module('app').config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('main');
        $stateProvider
            .state('main', {
                url: '/main',
                templateUrl: "view/main.html",
                resolve:{
                    deps:['uiLoad',function (uiLoad) {
                        return uiLoad.load(
                            ['js/directives/head.js','js/directives/poisition-list.js','js/directives/foot.js',
                                'js/controllers/mainCtrl.js'])
                    }]
                },
            })
            .state('search',{
                url:'/search',
                templateUrl:'view/search.html',
            })
}])