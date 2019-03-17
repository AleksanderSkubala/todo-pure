function check() {
    if(window.localStorage) {
        return true;
    }
    else {
        console.log("Local Storage Not Supported");
        return false;
    }
}

function push(key, value) {
    if(check()) {
        window.localStorage.setItem(key, value);
    }
}

function getData() {
    var data = window.localStorage.getItem('todos');
    if(!data) {
        push('todos', JSON.stringify({'all': []}));
        data = window.localStorage.getItem('todos');
    }

    var todo = JSON.parse(data);

    console.log(todo);
    return todo.all;
}