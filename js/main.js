//onload
check();
let allTodos = getData();
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
        push('todos', JSON.stringify(obj));

        inputs[0].value, inputs[1].value, inputs[2].value = '';
        showData(getData());
    }
};

function arrow(index) {
    const div = document.getElementsByClassName('addedinfo')[index];
    div.classList.toggle('hidden');
}

function deleteEl(index) {
    if(index===0) {
        allTodos.slice(1);
    } else if(index===allTodos.length-1) {
        allTodos.slice(0, allTodos.length-2);
    } else {
        const arr1 = allTodos.slice(0, index);
        const arr2 = allTodos.slice(index+1);
        allTodos = arr1.concat(arr2);
    }

    showData(getData());
}

function showData(data) {
    var list = document.querySelector('#list');
    list.innerHTML = '';
    var fragment = document.createDocumentFragment();

    data.forEach( (value,index) =>{
        fragment.appendChild(createLi(value, index));
    });

    list.appendChild(fragment);
}

function createLi(value, index) {
    var el = document.createElement('li');

    var btnCheck = document.createElement('button');
    el.appendChild(btnCheck);
    btnCheck.outerHTML = `<button class="buttonCheck" onclick="deleteEl(${index})"><i class="material-icons">check</i></button>`;

    var h1 = document.createElement('h1');
    h1.innerHTML = value[0];
    el.appendChild(h1);

    var btnArrow = document.createElement('button');
    el.appendChild(btnArrow);
    btnArrow.outerHTML = `<button class="buttonArrow" onclick="arrow(${index})"><i class="material-icons">keyboard_arrow_down</i></button>`;

    var addedinfo = document.createElement('div');
    addedinfo.className = 'addedinfo hidden';

    var description = document.createElement('p');
    description.innerHTML = value[1] ? '<b>Opis: </b>'+value[1] : '';
    addedinfo.appendChild(description);

    var date = document.createElement('p');
    date.innerHTML = value[2] ? '<b>Termin: </b>'+value[2] : '';
    addedinfo.appendChild(date);

    el.appendChild(addedinfo);

    return el;
}