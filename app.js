let icon = document.getElementById('icon')
icon.onclick = function () {
    document.body.classList.toggle('dark-theme')
    if (document.body.classList.contains('dark-theme'))
        icon.src = "./dark theme icon/sun.png";
    else {
        icon.src = "./dark theme icon/moon.png";
    }
}

// Gallery Part 

let fullImgBox = document.getElementById('fullImgBox')
let fullImg = document.getElementById('fullImg')

function openFullImg(pic) {
    fullImgBox.style.display = "flex"
    fullImg.src = pic
}
function closeFullImg() {
    fullImgBox.style.display = "none"
}

// Feedback Part 
let submit = document.querySelector('.submit');
let name = document.getElementById('name')
let feedback = document.getElementById('feedback')
let feedBackElem = document.querySelector('.feedback')
let feedbacks = JSON.parse(localStorage.getItem('feedback'))
if (feedback) {
    feedbacks.forEach(element => {
        addFeedback(element)
    });
}
submit.addEventListener('click', (e) => {
    e.preventDefault();
    addFeedback()
});

function addFeedback(obj) {
    let nameValue = name.value;
    let feedbackValue = feedback.value;
    if (obj) {
        nameValue = obj.name;
        feedbackValue = obj.feedback
    }
    let card = document.createElement('div')

    card.classList.add('card')
    if (nameValue && feedbackValue) {
        card.innerHTML = ` <h4>${nameValue}</h4>
    <p>${feedbackValue}</p>
    <button class="del">Delete</button>`;
        feedBackElem.appendChild(card);
        updatesLs()
    };

    let del = card.querySelector('.del');
    del.addEventListener("click", () => {
        card.remove()
        updatesLs()
    })
}

function updatesLs() {
    card = document.querySelectorAll('.card')
    let arr = [];
    card.forEach(element => {
        arr.push({
            name: element.children[0].innerText,
            feedback: element.children[1].innerText
        })
    });
    localStorage.setItem("feedback", JSON.stringify(arr))
}