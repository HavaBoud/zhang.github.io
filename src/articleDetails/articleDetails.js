import arti from '../../src/article_route'


class Url {
    constructor(props) {
        this.url = props
    }
    get(key) {
        var a = ''
        this.url = this.url.split('&')
        this.url.forEach(element => {
            if (element.indexOf(key) > -1) {
                a = element.substr(element.indexOf('=') + 1, element.length)
            }
        });
        return a
    }
    parse() {
        var a = ''
        for (const key in this.url) {
            a += key + '=' + this.url[key] + '&'
        }
        a = a.substr(0, a.length - 1)
        return a
    }
}
var url = new Url(window.location.search)
var id = url.get('id')
console.log(id)


var params = {
    type: '1',
    id: 1,
    name: 'xiaoming'
}
var url2 = new Url(params)
var parse = url2.parse() //  type=2&id=1&name=xiaoming
console.log(parse)


document.querySelector('.artcle').innerHTML = getarticle()

function getarticle() {
    var data = ''
    for (let i = 0; i < arti.length; i++) {
        if (id == arti[i].id) {
            data = arti[i].article
            break
        }
    }
    return data
}