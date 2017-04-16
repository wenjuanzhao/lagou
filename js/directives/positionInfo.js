angular.module('app').directive('appPositionInfo',["$http",function ($http) {
      return {
          retrict:"A",
          templateUrl:"view/template/positionInfo.html",
          scope:{
             isLogin:'=',
              pos:'='
          },
          link:function ($scope) {
              $scope.$watch('pos',function (newVal) {
                  if(newVal){
                      $scope.pos.select=$scope.pos.select||false;
                      $scope.imagePath=$scope.pos.select?'image/star-active.png':'image/star.png'
                  }
              })
              $scope.favorite=function () {
                  $scope.pos.select=!$scope.pos.select;
                  $scope.imagePath=$scope.pos.select?'image/star-active.png':'image/star.png'
             }
          }
      }
}])