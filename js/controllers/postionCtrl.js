angular.module('app').controller('postionCtrl',["cache","$scope","$http","$state","$q",function (cache,$scope,$http,$state,$q) {
     $scope.isLogin=!!cache.get('name');
     $scope.message=$scope.isLogin?'投个简历':'去登录';
     function getPosition() {
         var def=$q.defer();
         //$state.params.id得到的是通过url传过来的参数
         $http.get("data/positionList.json",{params:{id:$state.params.id}}).then(function (res) {
             angular.forEach(res.data,function (val,index) {
                 if(res.config.params.id==val.id){
                     $scope.position=val;
                     def.resolve(val);
                 }
             })

         },function (err) {
             def.reject(err)
         })
         return def.promise;
     }
     function getCompany(id) {
         $http.get('data/company.json').then(function (res) {
             if(res.data){
                 angular.forEach(res.data,function (val,index) {
                    if(id==val.id){
                        $scope.company=val
                    }
                 })

             }

         })
     }
    getPosition().then(function (obj) {
        getCompany(obj.companyId)
    })
    $scope.go=function () {
        if($scope.message!=='已投递'){
            if($scope.isLogin){
                $scope.message="已投递"
            }else{
                $state.go('login')
            }
        }
    }
}])