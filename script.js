required = ['hosts'];
videos = [
    'GuM8vTq0jd4',
    '3ntAEPtqH4o',
    '_Nq4Z5i7lcs',
    'jZW4diiXtNI'
];
chrome.storage.sync.get(required, function(options) {
    var included = false;
    for (i in options.hosts)
        if (location.hostname.indexOf(options.hosts[i]) >= 0)
            included = true;
    if (included) {
        window.open('https://youtube.com/watch?v=' + videos[Math.floor(Math.random() * videos.length)]);
    } else {} // Not a blacklisted website
});
