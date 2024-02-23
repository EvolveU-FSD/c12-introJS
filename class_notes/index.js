function greet(name){
    console.log('hello,', name);

    var btn = document.getElementById('myButton');
    btn.innerHTML = "hello "+name;
}

console.log('js loaded')