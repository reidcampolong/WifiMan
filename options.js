let page = document.getElementById('optionsBody');

function constructOptions() {

    // Load user options
    let userField = document.createElement('input');

    chrome.storage.sync.get('username', function (data) {
        var name = data.username
        userField.value = (name != undefined ? name : "username");
    });

    userField.addEventListener('input', function () {
        chrome.storage.sync.set({ username: userField.value }, function () {
            console.log('User named saved to be ' + userField.value);
        })
    })

    page.appendChild(userField);

    // Load the password field options
    let passField = document.createElement('input');

    chrome.storage.sync.get('password', function (data) {
        var pass = data.password
        passField.value = (pass != undefined ? pass : "password");
    });

    passField.addEventListener('input', function () {
        chrome.storage.sync.set({ password: passField.value }, function () {
            console.log('Password saved to be ' + passField.value);
        })
    })

    page.appendChild(passField);


    // Load the URL field options
    let urlField = document.createElement('input');

    chrome.storage.sync.get('url', function (data) {
        var url = data.url
        urlField.value = (url != undefined ? url : "URL");
    });

    urlField.addEventListener('input', function () {
        chrome.storage.sync.set({ url: urlField.value }, function () {
            console.log('URL saved to be ' + urlField.value);
        })
    })

    page.appendChild(urlField);


}

constructOptions();