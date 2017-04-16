angular.module('app').controller('loginCtrl',["$scope","cache","$http","$state",function ($scope,cache,$http,$state) {
   $scope.submit=function () {
       $http.get('data/login.json').then(function (res) {
           if(res.data){
               cache.put('id',res.data.id);
               cache.put('name',res.data.name);
               cache.put('image',res.data.image);
               $state.go('main')
           }
       })
   }
}])