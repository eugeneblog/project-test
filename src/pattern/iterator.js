class Iterator{
    constructor(container){
        this.list = container.list;
        this.index = 0;
    }

    next(){
        if(this.hasNext()){
            return this.list[this.index++];
        }else{
            return null;
        }
    }

    hasNext(){
        if(this.index >= this.list.length){
            return false;
        }else{
            return true;
        }
    }

}

class Container{
    constructor(list){
        this.list = list;
    }

    getiterator(){
        return new Iterator(this);
    }
}

var arr = [1,2,3,4,5,6,7,8];

var container = new Container(arr);
var iterator = container.getiterator();


// while(iterator.hasNext()){
//     console.log(iterator.next())
// }

//ES6 迭代器语法
let iterators = arr[Symbol.iterator]();

let items = {done : false};

while(!items.done){
    items = iterators.next();
    
   items.value ? console.log(items.value) : false;
}