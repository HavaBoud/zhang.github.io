export default class Animate {
    constructor(props){
            this.targets=props
            this.el=props.el
            this.model=props.model
            this.exec()
        }
        exec(){
            this.targets.model.exec(this.el)
        }
}

//第一题
// constructor(props){
//     this.targets=props
//     this.el=props.el
//     this.model=props.model
//     this.exec()
// }
// exec(){
//     this.targets.model.exec(this.el)
// }
// 五题
// constructor(){
//     this.el=Animate.el
//     this.modle = Animate.modle
// }
// static el;
// static modle;
// static create(){
//     return new Animate();
// }
// use(Translate){
//     try {
//         Animate.modle=Translate.install();
//     } catch (e) {
//         Translate();
//     }
//     return this;
// }
// mount(item){
//     Animate.el=item;
//     new Animate.modle().exec()
// }