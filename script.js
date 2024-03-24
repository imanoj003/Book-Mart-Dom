// selecting popupbox ,overlay,button

var popup_overlay = document.querySelector(".popup-overlay")
var popup_box = document.querySelector(".popup-box")
var add_popup_button = document.getElementById("add-popup-button")

add_popup_button.addEventListener("click", function () {

    popup_overlay.style.display = "block"
    popup_box.style.display = "block"

})

// selecting cancel button

var cancelpopupbutton = document.getElementById("cancel-pop")

cancelpopupbutton.addEventListener("click", function (event) {

    event.preventDefault()
    popup_overlay.style.display = "none"
    popup_box.style.display = "none"

})

// select container , add-book , book-title-input , book-author-input ,book-description-input
var addbook = document.getElementById("add-book")
var container = document.querySelector(".container")
var booktitleinput = document.getElementById("book-title-input")
var bookauthorinput = document.getElementById("book-author-input")
var bookdescriptioninput = document.getElementById("book-description-input")

addbook.addEventListener("click", function (event) {
    event.preventDefault()
    var div = document.createElement("div")
    div.setAttribute("class", "book-conatiner")
    div.innerHTML = `<h2>${booktitleinput.value}</h2>
                      <h4>${bookauthorinput.value}</h4>
                      <p>${bookdescriptioninput.value}</p>
                      <button onclick = "deleteitem(event)">Delete</button>`
    container.append(div)
    popup_overlay.style.display = "none"
    popup_box.style.display = "none"

})

function deleteitem() {
    event.target.parentElement.remove()
}