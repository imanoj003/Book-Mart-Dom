// selecting popupbox ,overlay,button

var popup_overlay = document.querySelector(".popup-overlay")
var popup_box =document.querySelector(".popup-box")
var add_popup_button = document.getElementById("add-popup-button")

add_popup_button.addEventListener("click",function(){
   
    popup_overlay.style.display = "block" 
    popup_box.style.display = "block"

})
  
// selecting cancel button

var cancelpopupbutton = document.getElementById("cancel-pop")

cancelpopupbutton.addEventListener("click",function (event){

    event.preventDefault()
    popup_overlay.style.display = "none" 
    popup_box.style.display = "none"
    
})

// select container , add-book , book-title ,

