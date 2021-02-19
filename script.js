const form = document.getElementById("form");
const paragraph = document.getElementById("text");

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const month = e.target.querySelector('#month').value;
    const day = e.target.querySelector('#day').value;
    const dateUrl = "http://numbersapi.com/"+month+"/"+day+"/date"
    fetch(dateUrl)
        .then(res => res.text())
        .then(text => paragraph.innerHTML = text);
});