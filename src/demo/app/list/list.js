import $ from 'jquery';
import {GET_LIST} from '../config/config.js'
export default class List{
    constructor(app){
        this.app = app;
        this.$el = $('<div>');
    }

    //获取数据
    loadData(){
        //返回primse实例
        return fetch(GET_LIST).then(result => {
            return result.json();
        })
    }

    //生成列表
    initItemsList(data){
        data.map(itemData => {
            //创建item，然后init
            
        })
    }

    //渲染
    render(){
        this.app.$el.append(this.$el);
    }

    init(){
        this.loadData().then(data => {
            this.initItemsList(data);
        }).then((() => {
            this.render();
        }))
    }
}