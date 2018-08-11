class State{
    constructor(color){
        this.color = color;
    }

    handle(context){
        console.log(`turn to ${this.color}`);
        context.setState(this);
    }
}

class Context{
    constructor(){
        this.state = null;
    }

    getState(){
        return this.state
    }

    setState(state){
        this.state = state;
    }
}

let context = new Context();

let green = new State('green');

green.handle(context);
// console.log(context.getState())


//模拟ES6 promise 状态变化
class Mypromise{
    constructor(fn){
        

        fn(() => {

        },() => {

        })
    }
}