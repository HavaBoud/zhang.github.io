class Animal{
    constructor(target){
        this.target = target;
    }

    run(){
        this.target.run();
    }
}


class Dark{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    run(){
        console.log('小鸭子' + this.name + '跑起来啦！')
    }
}

var kimi = new Animal(new Dark('kimi',18))

kimi.run();

var animale = new Animate(new Ani2());