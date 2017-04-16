angular.module('app').directive('appHeadBar',[function () {
    return {
        retrict:"A",
        templateUrl:"view/template/headBar.html",
        scope:{
            text:"@"
        },
        link:function (scope,element,attr) {
           scope.back=function () {
               window.history.back();
           }
        }
    }
}])