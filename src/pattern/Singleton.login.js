class Login{
    constructor(){
        this.isShow = false;
    }

    show(){
        if(this.isShow == true){
            alert('已经显示');
        }else{
            this.isShow = true;
            console.log('显示成功')
        }
    }

    hide(){
        if(this.isShow == false){
            alert('已经隐藏');
        }else{
            this.isShow = false;
            console.log('隐藏成功');
        }
    }
}

Login.getInstance = (function(){
    let instance;
    return function(){
        if(!instance){
            instance = new Login();
        }
        return instance;
    }
})()

let obj1 = Login.getInstance();
let obj2 = Login.getInstance();

obj1.show();
obj1.show();
// obj1.hide();
