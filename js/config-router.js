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
                resolve:{
                    deps:['uiLoad',function (uiLoad) {
                        return uiLoad.load(
                            ['js/directives/foot.js','js/directives/tab.js',
                                'js/controllers/search.js','js/directives/poisition-list.js',
                                'js/directives/sheet.js'])
                    }]
                },
            })
            .state('position',{
                url:'/position/:id',
                templateUrl:'view/position.html',
              resolve:{
                    deps:[
                        'uiLoad',function (uiLoad) {
                            return uiLoad.load(
                                ['js/directives/headBar.js','js/directives/positionInfo.js', 'js/controllers/postionCtrl.js','js/directives/company.js'])
                        }
                    ]
              }
        })
            .state('me',{
                "url":'/me',
                "templateUrl":'view/me.html',
                resolve:{
                    deps:[
                        'uiLoad',function (uiLoad) {
                            return uiLoad.load(
                                ['js/controllers/meCtrl.js'])
                        }
                    ]
                }
            })
            .state('login',{
                "url":'/login',
                "templateUrl":'view/login.html',
         resolve:{
        deps:[
            'uiLoad',function (uiLoad) {
                return uiLoad.load(
                    ['js/controllers/loginCtrl.js'])
            }
        ]
    }
            })
            .state('register',{
                "url":'/register',
                "templateUrl":'view/register.html',
                resolve:{
                    deps:[
                        'uiLoad',function (uiLoad) {
                            return uiLoad.load(
                                ['js/controllers/registerCtrl.js'])
                        }
                    ]
                }
            })
            .state('favorite',{
                "url":'/favorite',
                "templateUrl":'view/favorite.html',
                resolve:{
                    deps:[
                        'uiLoad',function (uiLoad) {
                            return uiLoad.load(
                                ['js/controllers/favoriteCtrl.js','js/directives/headBar.js','js/directives/poisition-list.js',])
                        }
                    ]
                }
            }).state('post',{
            "url":'/post',
            "templateUrl":'view/post.html',
            resolve:{
                deps:[
                    'uiLoad',function (uiLoad) {
                        return uiLoad.load(
                            ['js/directives/headBar.js','js/controllers/postCtrl.js','js/directives/tab.js','js/directives/poisition-list.js',])
                    }
                ]
            }
        })

}])