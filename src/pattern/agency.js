
//代理模式，通过prixy类的display方法访问根类的方法和属性
class ReadImg{
    constructor(filename){
        this.filename = filename;
        this.loadFromDisk();
    }

    display(){
        console.log(`display ... ${this.filename}`);
    }


    loadFromDisk(){
        console.log(`loading ...${this.filename}`);
    }
}

class ProxyImg{
    constructor(filename){
        this.realImg = new ReadImg(filename);

    }

    display(){
        this.realImg.display();
    }
}

let proxyImg = new ProxyImg('1.png');
proxyImg.display();


//ES6 proxy代理语法，添加代理器

//明星
let star = {
    name:'Eugene',
    phone : 12345,
    address : 'Beijing',
    age : 28
}

//经纪人
let agent = new Proxy(star,{

    get:function(target , key){
        // console.log(key)
        if(key === 'name'){
            return 'Bob'
        }
        if(key === 'address'){
            return 'Jiangxi'
        }
        if(key === 'age'){
            return target.age;
        }
    },

    set:function(target , key , val){
        if(key === 'customPrice'){
            if(val < 100000){
                throw new Error('go out');
            }else{
                target[key] = val;
                console.log('you good');
                return true;
            }
        }
    }
})

console.log(agent.name)
console.log(agent.age)
console.log(agent.address);
agent.customPrice = 1000300;
