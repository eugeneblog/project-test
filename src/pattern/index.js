//创建停车厂类
class Pack{
    constructor(floors){
        this.floors = floors || [];
        this.index = floors.length;
        this.screen = new Screen();
        this.camera = new Camera();
        this.carList = {} //存储摄像头返回的信息
    }
    goIn(car){
        //通过摄像头获取信息
        const info = this.camera.showCar(car);
        //停到某个停车位
        const i = parseInt(Math.random() * 100 % 100);
        const place = this.floors[0].places[i];
        place.hasCar();
        info.place = place;
        //记录信息
        this.carList[car.num] = info;

        //清空记录
        
    }
    goOut(car){
        //
        const info = this.carList[car.num];
        //清空停车位
        const place = info.place;
        place.noCar();

        //显示时间
        this.screen.show(car , info.inTime);
        delete this.carList[car.num];
    }

    emptyPlaceNum(){
        return this.floors.map(floors => {
            return `${floors.index}层还有${floors.emptyPlaceNum()}个空闲车位`
        })
    }

}

//创建层

class Floor{
    constructor(places , index) {
        this.index = index;
        this.places = places || []
    }

    emptyPlaceNum(){    
        let num = 0;
        this.places.forEach(p => {
            if(p.empty){
                num = num+1
            }
        })
        return num;
    }

}

//创建车位

class Place{
    constructor(){
        this.empty = true;
    }

    hasCar(){
        this.empty = false;
    }

    noCar(){
        this.empty = true;
    }
}

//创建相机
class Camera{
    showCar(car){
        return {
            num:car.num,
            inTime: Date.now()
        }
    }
}

//创建显示器

class Screen{
    show(car , inTime){
        console.log(`车牌号${car.number}`);
        console.log(`停车时间是`,Date.now() - inTime)
    }
}

class Car{
    constructor(number){
        this.number = number;
    }
}

//测试
const floors = [];
for (let i = 0; i < 3; i++) {
    const places = [];
    for (let j = 0; j < 100; j++) {
       
        places[j] = new Place();
        
    }
    floors[i] = new Floor(places, i+1);
}

const pack = new Pack(floors);
const car1 = new Car('A10000'),
    car2 = new Car('B1000'),
    car3 = new Car('C10000');
    pack.goIn(car1);
    console.log('第一辆车进入')
    console.log(pack.emptyPlaceNum());
    pack.goIn(car2)
    console.log('第二辆车进入');
    console.log(pack.emptyPlaceNum());
    pack.goOut(car1);
    console.log('第一辆车离开');
    console.log(pack.emptyPlaceNum());
    
