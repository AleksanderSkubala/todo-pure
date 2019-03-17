//onload
check();
const allTodos = getData();
showData(allTodos);


var btnMore = document.querySelector('#buttonMore');
var more = document.querySelector('#moreInfo');
var add = document.getElementsByClassName('buttonAdd')[0];
var checkDescription = document.getElementsByClassName('buttonAdd')[1];
var checkDate = document.getElementsByClassName('buttonAdd')[2];
const inputs = document.getElementsByClassName('input');

btnMore.onclick = ()=>{
    more.classList.toggle('showed');
    setTimeout(250);
    more.classList.toggle('far-far-away');
};

add.onclick = () => {
    if(inputs[0].value) {
        const newTodo = [inputs[0].value, inputs[1].value, inputs[2].value];
        allTodos.push(newTodo);
        var obj = {'all': allTodos};
        console.log(obj);
        push('todos', JSON.stringify(obj));
    }
};

function showData(data) {
    var list = document.querySelector('#list');
    var fragment = document.createDocumentFragment();
    data.forEach( value =>{
        var el = document.createElement('li');

        var h1 = document.createElement('h1');
        h1.innerHTML = value[0];
        el.appendChild(h1);

        var description = document.createElement('p');
        description.innerHTML = value[1];
        el.appendChild(description);

        var date = document.createElement('p');
        date.innerHTML = value[2];
        el.appendChild(date);

        fragment.appendChild(el);
    });
    list.appendChild(fragment);
    console.log(data);
}