class SingletonObject{
    login(){
        console.log('login...')
    }
}
SingletonObject.getInstance = (function(){
    let instance;
    return function(){
        if(!instance){
            instance = new SingletonObject();
        }
        return instance;
    }
})()

let obj1 = SingletonObject.getInstance();
let obj2 = SingletonObject.getInstance();

let o1 = new SingletonObject();
let o2 = new SingletonObject();
console.log(obj1 === obj2)