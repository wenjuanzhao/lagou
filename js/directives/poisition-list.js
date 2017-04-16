angular.module('app').directive('appPositionList',['$http',function ($http) {
     return {
         retrict:"A",
         templateUrl:"view/template/position-list.html",
         scope:{
             data:"=",
             filterObj:'=',
             isFavorite:'='
         },
       link:function (scope) {
           scope.select=function (item) {
               $http.post('data/favortite.json',{id:item.id,select:!item.select,}).succes(function (res) {
               if(res.state==1)
               {
                   item.select=!item.select;
               }
               })
           }
       }
     }
}])