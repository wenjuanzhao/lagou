angular.module('app').directive('appPositionList',['$http',function ($http) {
     return {
         retrict:"A",
         templateUrl:"view/template/position-list.html",
         scope:{
             data:"=",
             filterObj:'=',
             isFavorite:'='
         },

     }
}])