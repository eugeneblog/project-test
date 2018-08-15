class Cart{
    constructor(list){
        this.list = [];
    }

    add(data){
        this.list.push(data);
    }

    del(id){
        this.list = this.list.filter(item => {
            if(item.id === id){
                return false;
            }else{
                return true;
            }
        })
    }

    getList(){
        return this.list.map(item => {
            return item.name;
        }).join('\n');
    }
}

let getCart = (function(){
    let cart;
    return function(){
        if(!cart){
            cart = new Cart();
        }
        return cart;
    }
})()

export default getCart;