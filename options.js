let page = document.getElementById('optionsBody');

function loadNewSetting(attribute) {
    let field = document.createElement('input');
    
    chrome.storage.local.get([attribute], function (data) {
        var attributeData = data[attribute]
        field.value = (attributeData != undefined ? attributeData : attribute);
    }); 

    field.addEventListener('input', function () {
        inputKey = attribute
        chrome.storage.local.set({ [attribute]: field.value }, function () {
            console.log(attribute + ' saved to be ' + field.value);
        })
    })
    return field;
}

function constructOptions() {

    userSetting = loadNewSetting('username');
    page.appendChild(userSetting);

    passwordSetting = loadNewSetting('password');
    page.appendChild(passwordSetting);

    urlSetting = loadNewSetting('url');
    page.appendChild(urlSetting);

}

constructOptions();