var inputs = document.querySelectorAll('textarea, input, select');

var options = {};
var required = [];

for (i = 0; i < inputs.length; i++) required.push(inputs[i].id);
console.log(required);

chrome.storage.sync.get(required, function(items) {
    options = items;
    console.log(items)
    for (i in inputs) {
        if (inputs[i].tagName === 'TEXTAREA') {
            try {
                inputs[i].value = options[inputs[i].id].join('\n');
            } catch (e) {};
        } else inputs[i].value = options[inputs[i].id];
    }
});


document.getElementById('submit').onclick = function() {
    for (i in inputs) {
        if (inputs[i].tagName === 'TEXTAREA') {
            options[inputs[i].id] = inputs[i].value.split(/\n/);
        } else options[inputs[i].id] = inputs[i].value;
    }
    console.log(options)
    // Save it using the Chrome extension storage API.
    chrome.storage.sync.set(options, function() {
      console.log('Settings saved');
    });
}
