angular.module('app').controller('registerCtrl',["$scope","$http","$state","$interval","$injector",function ($scope,$http,$state,$interval,$injector) {
    $scope.submit=function () {
        $http.post('data/regist.json',$scope.user).then(function (res) {
            $state.go('login')
        })
    }

    var count=60;
    $scope.send=function () {
        $http.post('data/code.json').then(function (res) {
            if(res.data.state==1){
                count=60;
                $scope.time='60s'
                var interval=$interval(function () {
            if(count<=0){
                $interval.cancel(interval);
                $scope.time='';
            }
            else{
                count--;
                $scope.time=count+'s';
            }
                },1000)
            }
        })
    }
}])