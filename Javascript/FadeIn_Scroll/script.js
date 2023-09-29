"use strict";
const observer = new IntersectionObserver((entries) => {
  //observe multiple element at same time
  entries.forEach((element) => {
    console.log(element);
    if (element.isIntersecting) {
      //itersecting at viewport or not
      element.target.classList.add("show");
    } else {
      element.target.classList.remove("show");
    }
  });
});
const hiddenElement = document.querySelectorAll(".hidden");

hiddenElement.forEach((el) => observer.observe(el)); //loop over all the hidden elements and tell the observer to obser each of them.
