var txtinput = document.querySelector("#txt-input");
var txtoutput = document.querySelector("#txt-output");
var btnTranslate = document.querySelector("#btn");

const apiUrl = "https://api.funtranslations.com/translate/groot.json";

btnTranslate.addEventListener("click", clickHandler);

function getFinalApi(text) {
    return apiUrl + "?" + "text=" + text;
}

function errorHandler(err) {
    console.log("Theres an Error" + err);
    alert("Something Wrong with the Server ! Please Try Again");
}

function clickHandler() {
    var inputValue = txtinput.value;
    
    fetch(getFinalApi(inputValue))
        .then(response => response.json())
        .then(json => {
            var grootText = json.contents.translated;
            console.log(grootText);
            txtoutput.innerText = grootText;
        })
        .catch(errorHandler);
}