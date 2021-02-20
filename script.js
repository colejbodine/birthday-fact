const form = document.getElementById("form");
const paragraph = document.getElementById("text");

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const month = e.target.querySelector('#month').value;
    const day = e.target.querySelector('#day').value;
    var dateUrl;

    //TODO: Escape control flow hell.
    if(month >= 1 && month <= 12) {
        if (month == 2) {
            if (day >= 1 && day <= 29) {
                dateUrl = "http://numbersapi.com/"+month+"/"+day+"/date";
            }
        }
        else if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) {
            if (day >= 1 && day <= 31) {
                dateUrl = "http://numbersapi.com/"+month+"/"+day+"/date";
            }
        }
        else {
            if (day >= 1 && day <= 30) {
                dateUrl = "http://numbersapi.com/"+month+"/"+day+"/date";
            }
        }
    }

    //TODO: Same as above.
    if(dateUrl) {
        fetch(dateUrl)
        .then(res => res.text())
        .then(text => paragraph.innerHTML = text);
    } else {
        paragraph.innerHTML = "Enter a valid date.";
    }
    
});