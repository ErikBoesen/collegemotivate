var inputs = document.querySelectorAll('textarea, input, select');

for (i in inputs) {
    if (inputs[i].tagName === 'TEXTAREA') {
        inputs[i].value = JSON.parse(localStorage[inputs[i].id]).join('\n');
    } else inputs[i].value = localStorage[inputs[i].id];
}

document.getElementById('submit').onclick = function() {
    for (i in inputs) {
        if (inputs[i].tagName === 'TEXTAREA') {
            localStorage[inputs[i].id] = JSON.stringify(inputs[i].value.split(/\n/));
        } else localStorage[inputs[i].id] = inputs[i].value;
    }
}
