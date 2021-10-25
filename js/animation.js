// class Ani{
//     constructor(item){
//         this.targets=item.targets
//         this.animation(this.targets)
//     }
//     animation(arr){
//         if(!arr.length) return;
//         var newarr =arr.shift();
//         newarr.el.classList.add(newarr.animationClassName)
//         newarr.el.addEventListener('animationend',()=>{
//             newarr.el.classList.remove(newarr.animationClassName)
//             this.animation(arr);
//         })
//     }
// }
class Ani {
    constructor(e) {
        this.targets = e.targets;
        this.count = e.count;
        this.newArr = this.targets.slice();
        this.exec(this.newArr);
    }
    exec(arr) {
        let _this = this;
        if (arr.length > 0) {
            let target = arr.shift();
            target.el.classList.add(target.animationClassName);
            // onlick是覆盖 addEventListener是添加事件
            let addEvent = function(e) {
                this.classList.remove(target.animationClassName);
                this.removeEventListener('animationend', addEvent)
                _this.exec(arr);
            }
            target.el.addEventListener('animationend', addEvent);
        } else {
            this.newArr = this.targets.slice();
            if (this.count > 1) {
                this.count--;
                this.exec(this.newArr);
            }
        }
    }
}

var ani = new Ani({
    targets:[
        {
            el:document.querySelector('.top-img'),
            animationClassName:'imgani'
        },
        {
            el:document.querySelector('.top-text'),
            animationClassName:'top-textani'
        },
        {
            el:document.querySelector('.warp'),
            animationClassName:'warpani'
        },
        {
            el:document.querySelector('.box'),
            animationClassName:'boxain'
        }],
        count :2

        
}
)
// var topimg=document.querySelector('.top-img');
// var toptext = document.querySelector('.top-text')
// var marbles = document.querySelector('.marbles')
// var box = document.querySelector('.box')
// topimg.classList.add('imgani')
// toptext.classList.add('top-textani')
// marbles.classList.add('marbleani')
// box.classList.add('boxani')
// var arr=[
//     {
//         el:document.querySelector('.top-img'),
//         animationClassName:'imgani'
//     },
//     {
//         el:document.querySelector('.top-text'),
//         animationClassName:'top-textani'
//     },
//     {
//         el:document.querySelector('.warp'),
//         animationClassName:'warpani'
//     },
//     {
//         el:document.querySelector('.box'),
//         animationClassName:'boxain'
//     },
// ]
// // var arr=arr.slice()
// // console.log(arr)
// function showAnimation(){
//     if(!arr.length) return;
//     var target = arr.shift();
//     console.log(arr)
//     target.el.classList.add(target.animationClassName)
//     target.el.addEventListener('animationend',function(e){
//         console.log('动画执行结束')
//         showAnimation()
//     })
//     // if(!arr.length){
//     //     arr.reverse();
//     //     console.log(arr)
//     // }
//     // return
// }
// showAnimation()
