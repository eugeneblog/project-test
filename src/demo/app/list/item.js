import $ from 'jquery';
import getCart from '../shoppingCart/getCart.js'

export default class Item{
    constructor(list , data){
        this.list = list;
        this.data = data;
        this.$el = $('<div>');
        this.cart = getCart();
    }

    initContent(){
        let $el = this.$el;
        let data = this.data;
        $el.append($(`<p>名称:${data.name}</p>`));
        $el.append($(`<p>名称:${data.price}</p>`));
    }

    initButton(){
        
    }

    //添加到购物车
    addToCartHandle(){

    }

    //从购物车删除
    deleteFromCartHandel(){

    }

    render(){

    }

    init(){
        this.initContent();
        this.initButton();
        this.render();
    }
}