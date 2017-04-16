angular.module('app').controller('searchCtrl',["dict","$scope","$http",function (dict,$scope,$http) {
    $scope.name='';
    $scope.filterObj={};
    $scope.search=function () {
        $http.get('data/positionList.json?name='+$scope.name).then(function (res) {
            if($scope.name!=''){
                angular.forEach(res.data,function (item) {
                    var str=JSON.stringify(item);
                    if(str.indexOf($scope.name)!=-1){
                        $scope.filterObj=item
                    }
                })
            }else{
                $scope.filterObj={};
                $scope.positionList=res.data
            }

        })
    }
    $scope.search();
    $scope.sheet={};
    $scope.tabList=[
        {id:'city',name:'城市'},
        {id:'salary',name:'薪水'},
        {id:'scale',name:'公司规模'}
        ]
    var tabId='';
    $scope.tClick=function (id,name) {   //对应在tab.js使用的时候是tabClick
        tabId=id;
        $scope.sheet.list=dict[id];
        $scope.sheet.visible=true;
    }

    $scope.sClick=function (id,name) {
        if(id){
            angular.forEach($scope.tabList,function (item) {
                  if(item.id===tabId){
                       item.name=name
                  }
            })
            $scope.filterObj[tabId+ 'Id']=id;
        }
    }
}])