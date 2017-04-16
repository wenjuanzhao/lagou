angular.module('app').filter('filterByObj',[function () {
    //列表中的某一项的对象中的每一个属性都相同  则把这项放到result中
    return function (list,obj) {
        var result=[];
        angular.forEach(list,function (item) {
            var isEqual=true;
            for(var e in obj){
                if(item[e]!==obj[e]){
                   isEqual=false;
                }
            }
            if(isEqual){
                result.push(item);
            }

        })
        return result;
    }
}])