chrome.storage.local.get('url', function (data) {
    if(document.URL.includes(data.url)) {

        chrome.storage.local.get('submitted', function (data) {
            var lastSubmitted = Date.parse(data.submitted);

            var currentTime = new Date();
            if (!lastSubmitted || (currentTime - lastSubmitted > 5000)) {
                var userField = document.getElementById("user");
                var passField = document.getElementById("password");
                var submitButton = document.querySelector("input[type=submit]");
                
                chrome.storage.local.get('username', function (data) {
                    userField.value = data.username;
                });
                
                chrome.storage.local.get('password', function (data) {
                    passField.value = data.password;
                });
                
                if (submitButton) {
                    chrome.storage.local.set({ submitted: currentTime.toString() }, function () {
                        console.log('Updated last update time');
                        submitButton.click();
                    })
                }
            }
        });
    }
});
