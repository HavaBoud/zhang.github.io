import firstArticle from '../src/article/1.html'
import secondArticle from '../src/article/2.html'
import thirdArticle from '../src/article/3.html'

function HTMLparse(str) {
    var oDiv = document.createElement('div');
    oDiv.innerHTML = str;
    return oDiv.querySelector('template').innerHTML;
}
export default[
    {
        id:1,
        article:HTMLparse(firstArticle)
    },
    {
        id:2,
        article:HTMLparse(secondArticle)
    },
    {
        id:3,
        article:HTMLparse(thirdArticle)
    },
]
// {
//     id:4,
//     title:'如何看待知乎上的男拳',
//     article:`我看女拳的时候感觉她们不是女的 我看男拳的时候也不觉得他们是男的 疯了 全都疯了 老实人在中间说一句话立马被揍得东倒西歪
//     满地找牙关键老实人还不知道做错了啥`
// },
// {
//     id:5,
//     title:'如何看待知乎上的男拳',
//     article:`我看女拳的时候感觉她们不是女的 我看男拳的时候也不觉得他们是男的 疯了 全都疯了 老实人在中间说一句话立马被揍得东倒西歪
//     满地找牙关键老实人还不知道做错了啥`
// },