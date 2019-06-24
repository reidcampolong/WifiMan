chrome.storage.sync.get('url', function (data) {
    console.log(data.url);
    console.log(document.URL);
    if(data.url === document.URL) {
        var userField = document.getElementById("user");
        var passField = document.getElementById("password");
        var submitButton = document.querySelector("input[type=submit]");
        
        chrome.storage.sync.get('username', function (data) {
            userField.value = data.username;
        });
        
        chrome.storage.sync.get('password', function (data) {
            passField.value = data.password;
        });
        
        submitButton.click();
    }
});
