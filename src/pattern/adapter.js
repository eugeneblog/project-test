
(function(window){
    const $ = require("jQuery");
    window.$ = $;
    //适配器模式（Adapter）：将一个类的接口（方法或者属性）转化成另外一个接口，以满足用户需求，使类之间接口的不兼容问题通过适配器得以解决
    //参数适配器
    function doSomeThing(obj){   //插件参数配制，默认为_adapter，如果obj有参数，则覆盖默认参数
        let _adapter = {
            name:'Eugene',
            title:'Hello',
            age : 22,
            size : 100,
            prize : 20
        }

        for(var i in _adapter){
            _adapter[i] = obj[i] || _adapter[i];
            
        }

        //dosomthing...

    }


    //数据适配
    let arr = ['JavaScript' , 'txt' , 'Web' , 2014]
    function arrToObjAdapter(arr){
        return{
            nmae : arr[0],
            type : arr[1],
            title : arr[2],
            data : arr[3]
        }
    }
    let adapterData = arrToObjAdapter(arr);
    console.log(adapterData);

    //服务器端数据适配
    function ajaxAdapter(data){
        return [data['key1'] , data['key2'] , data['key3']]
    }
    $.ajax({
        url: 'someAdress.php',
        success : function(data , status){
            if(data){
                doSomeThing(ajaxAdapter(data));
            }
        }
    })
    console.log(window)
})(window)

