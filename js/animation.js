
// class Ani{
//     constructor(){
        
//     }
// }
// var ani = new Ani({
//     targets:[
//         {
//             el:document.querySelector('.top-img'),
//             animationClassName:'imgani'
//         },
//         {
//             el:document.querySelector('.top-text'),
//             animationClassName:'top-textani'
//         },
//         {
//             el:document.querySelector('.marbles'),
//             animationClassName:'marbleani'
//         },
//         {
//             el:document.querySelector('.box'),
//             animationClassName:'boxani'
//         },
//         {
//             el:document.querySelector('.top-l'),
//             animationClassName:'.top-l-ani'
//         },
//         {
//             el:document.querySelector('.top-r'),
//             animationClassName:'.top-r-ani'
//         },
//         {
//             el:document.querySelector('.bottom-l'),
//             animationClassName:'.bottom-l-ani'
//         },
//         {
//             el:document.querySelector('.bottom-r'),
//             animationClassName:'.bottom-r-ani'
//         }
//     ]
// })
// var topimg=document.querySelector('.top-img');
// var toptext = document.querySelector('.top-text')
// var marbles = document.querySelector('.marbles')
// var box = document.querySelector('.box')
// var topl = document.querySelector('.top-l')
// var topr = document.querySelector('top-r')
// var bottoml = document.querySelector('bottom-l')
// var bottomr = document.querySelector('bottom-r')
// topimg.classList.add('imgani')
// toptext.classList.add('top-textani')
// marbles.classList.add('marbleani')
// box.classList.add('boxani')
// topl.classList.add('top-l-ani')
// topr.classList.add('top-r-ani')
// bottoml.classList.add('bottom-l-ani')
// bottomr.classList.add('bottom-r-ani')
var arr=[
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
    },
    // {
    //     el:document.querySelector('.top-l'),
    //     animationClassName:'top-l-ani'
    // },
    // {
    //     el:document.querySelector('.top-r'),
    //     animationClassName:'top-r-ani'
    // },
    // {
    //     el:document.querySelector('.bottom-l'),
    //     animationClassName:'bottom-l-ani'
    // },
    // {
    //     el:document.querySelector('.bottom-r'),
    //     animationClassName:'bottom-r-ani'
    // }
]
function showAnimation(){
    if(!arr.length) return;
    console.log(arr)
    let target = arr.shift();
    target.el.classList.add(target.animationClassName)
    target.el.addEventListener('animationend',function(e){
        console.log('动画执行结束')
        showAnimation()
    })
}
showAnimation()
