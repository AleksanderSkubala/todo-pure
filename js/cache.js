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
        box.innerHTML = window.localStorage.getItem(key);
    }
}

function initialGetData() {
    const todos = window.localStorage.getItem('todos');
    return todos;
}