//"onload"
check();
window.localStorage.clear();
const todos = initialGetData();
const todoss = ['do hw', 'bla bla'];
showData(todoss);
//end of "onload"

var btnMore = document.querySelector('#buttonMore');
var more = document.querySelector('#moreInfo');

var add = document.getElementsByClassName('buttonAdd')[0];
var checkDescription = document.getElementsByClassName('buttonAdd')[1];
var checkDate = document.getElementsByClassName('buttonAdd')[2];
var list = document.querySelector('#list');

btnMore.onclick = ()=>{
    more.classList.toggle('showed');
};

function showData(data) {
    var smallList = document.createElement('div');
    data.forEach(todo => {
        var el = document.createElement('p');
        el.innerHTML = todo;
        smallList.appendChild(el);
    });
    list.appendChild(smallList);
}