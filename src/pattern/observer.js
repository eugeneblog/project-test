
//主题，保存状态，状态变化之后触发所有观察者对象
class Subject{
    constructor(){
        this.state = 0;
        this.observer = [];
    }
    getState(){
        return this.state;
    }
    setState(state){
        this.state = state;
        this.notifyAllObservers();
    }

    notifyAllObservers(){
        this.observer.forEach(observer => {
            observer.update();
        })
    }

    attach(observer){
        this.observer.push(observer);
    }

}
class Observer{
    constructor(name ,subject){
        this.name = name;
        this.subject = subject;
        this.subject.attach(this);
    }

    update(){
        console.log(this.name + '___update__state ' + this.subject.state);
    }
}

let subject = new Subject();

let p1 = new Observer('p1' , subject);
let p2 = new Observer('p2' , subject);
let p3 = new Observer('p3' , subject);
subject.setState(1);
console.log(subject);
console.log(p1)


// var Observers = (function(){  //观察者对象
//     var __messages = {};  //消息队列
//     return {
//         regist : function(type , fn){   //将订阅者注册的消息推入到消息队列 type:消息类型，fn：相应的处理动作

//             if(typeof __messages[type] === 'undefined'){  //如果此消息不存在，则创建一个该消息类型放入消息队列

//                 __messages[type] = [fn];

//             }else{
//                 //如果存在则将执行方法推入到相应的执行队列
//                 __messages[type].push(fn);

//             }
//         },
//         fire : function(type ,args){   //发布订阅消息，当观察者发布一个消息时将所有订阅者订阅的消息一次执行，type：要发布的消息类型 args:动作执行所需要的参数

//             if(!__messages[type])   //如果该消息类型不存在，不做任何执行，退出程序
//             return;
//             //定义消息信息
//             var 
//             i = 0,
//             len = __messages[type].length;

//             for(; i < len ; i++){   //遍历消息动作，依次执行注册的消息对应的动作序列
//                 // console.log(__messages[type][i])
//                 __messages[type][i].call(this , args); //将执行函数的this指向观察者对象

//             }
//         }
//     }
// })()

// Observers.regist('test' , function(args){
//     // console.log(this)
//     console.log(args);
// })

// Observers.fire('test' , 'list');

var Observers = (function(){
    var __messages = {};
    return {
        regist : function(type , fn){   //将订阅者注册的消息推入到消息队列 type:消息类型，fn：相应的处理动作

            if(typeof __messages[type] === 'undefined'){  //如果此消息不存在，则创建一个该消息类型放入消息队列

                __messages[type] = [fn];

            }else{
                //如果存在则将执行方法推入到相应的执行队列
                __messages[type].push(fn);

            }
        },
        fire : function(type , args){
            if(!__messages[type]);
            return;
            var events = {
                type : type,
                args : args || {}
            },
            len = __messages[type].length,
            i = 0;
            for( ; i < len ; i++){
                __messages[type][i].call(this , events);
            }
        },
        remove : function(type , fn){
            if(__messages[type] instanceof Array){
                var i = __messages[type].length - 1;
                for (; i >=0 ; i--){
                    __messages[type][i] === fn && __messages[type].splice(i , 1);
                }
            }
        }
    }
})()
Observers.regist('test' , function(args){
    // console.log(this)
    console.log(args);
})

Observers.fire('test' , 'list');
