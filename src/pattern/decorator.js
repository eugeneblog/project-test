
//装饰器模式

class Circle{
    draw(){
        console.log('go padding');
    }
}

class Decorator{
    constructor(circle){
        this.circle = circle;
    }

    draw(){
        this.circle.draw();
        this.setRedBorder(circle);
    }

    setRedBorder(circle){
        console.log('set red border')
    }
}

let circle = new Decorator(new Circle());
circle.draw()

//ES7 装饰器
// function testDec(isDec){
//     return function(target){
//         target.isDec = isDec;
//     }
// }
// @testDec(false)
// class Demo{

// }
// alert(Demo.isDec);

function mixins(...list){
    return function(target){
        Object.assign(target.prototype , ...list);
    }
}

const Foo = {
    foo(){
        alert('Foo')
    }
}

@mixins(Foo) //装饰器

class MyClass {

}

let obj1 = new MyClass();

// obj1.foo();

function log(target , name , descriptor){
    let oldValue = descriptor.value;
    descriptor.value = function(){
        console.log()
        return oldValue.apply(this , arguments)
    }
    return descriptor
}

class Math{
    @log
    add(a , b){
        return a+b;
    }
}