// 1. FOR SLIDESHOW

// Get all the buttons into a node list
let buttons = document.querySelectorAll("._carousel_control");

// Set an event handler on the document so that when
// any element is clicked, the event will bubble up to it
document.addEventListener("click", function (evt) {
  // Check to see if it was a button that was clicked
  if (evt.target.classList.contains("_carousel_control")) {
    // Loop over all the buttons & remove the active class
    buttons.forEach(function (button) {
      button.classList.remove("active");
    });
    // Make the clicked button have the active class
    evt.target.classList.add("active");
  }

  if (evt.target.classList.contains("carousel-control-next-icon") ||
    evt.target.classList.contains("carousel-control-next")) {
    let index;
    buttons.forEach((button, i, arr) => {
      if (button.classList.contains("active")) {
        button.classList.remove("active");
        index = i + 1 == arr.length ? 0 : i + 1;
      }
    });
    buttons[index].classList.add("active");
  }

  if (evt.target.classList.contains("carousel-control-prev-icon") ||
    evt.target.classList.contains("carousel-control-prev")) {
    let index;
    buttons.forEach((button, i, arr) => {
      if (button.classList.contains("active")) {
        button.classList.remove("active");
        index = i - 1 == -1 ? arr.length - 1 : i - 1;
      }
    });
    buttons[index].classList.add("active");
  }
});



// 2. FOR MODALS



// modal 1

// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("_img_diagram");
var modalImg = document.getElementById("img1");
var captionText = document.getElementById("caption");
img.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
}



// modal 2

// Get the modal
var modal_ielts = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img_ielts = document.getElementById("_img_ielts");
var modalImg_ielts = document.getElementById("img2");
var captionText_ielts = document.getElementById("caption");
img_ielts.onclick = function () {
  modal_ielts.style.display = "block";
  modalImg_ielts.src = this.src;
  captionText_ielts.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span_ielts = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span_ielts.onclick = function () {
  modal_ielts.style.display = "none";
}