angular.module('app').config(['$validationProvider',function ($validationProvider) {
    var expression={
        phone:/^1\d{10}$/,
        password:function (value) {
            return value.length>5;
    },
        required:function (value) {
            return !!value;
        }
    }
    var defaultMessage={
        phone:{
            success:'',
            error:'请输入11位手机号'
        },
        password:{
            success:'',
            error:'长度至少为6位'
        },
        required:{
            success:'',
            error:'不能为空'
        }
    }
    $validationProvider.setExpression(expression).setDefaultMsg(defaultMessage)

}])