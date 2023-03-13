document.body.onload = function () {
    nbr = 3;
    p = 0;
    content = document.getElementById("content");
    g = document.getElementById("g");
    d = document.getElementById("d");
    content.style.width = (2000 * nbr) + "px";
    for (i = 1; i <= nbr; i++) {
        div = document.createElement("div");
        div.className = "photo";
        div.style.backgroundImage = "url('images/caroussel/img" + i + ".jpg')";
        content.appendChild(div);
    }
    afficherMasquer();
}
d.onclick = function () {
    if (p > -nbr + 1)
        p--;
    content.style.transform = "translate(" + p * 33 + "%)";
    content.style.transition = "all 0.5s ease";
    afficherMasquer();

}

g.onclick = function () {
    if (p < 0)
        p++;
    content.style.transform = "translate(" + p * 33 + "%)";
    content.style.transition = "all 0.5s ease";
    afficherMasquer();
}
function afficherMasquer(){
    if(p==-nbr+1)
    d.style.visibility="hidden";
    else
    d.style.visibility="visible";
    if(p==0)
    g.style.visibility="hidden";
    else
    g.style.visibility="visible";
}


// test 1
// var actual = 0;
// var total = 3;

// function addClass(elem, name) {
//     elem.className = elem.className + " " + name;
// }

// function deleteClass(elem, name) {
//     var c = elem.className;
//     elem.className = c.replace(name, "").replace(/   /g, " ").replace(/^ | $/g, "");
// }

// function nextImg() {
//     var e;

//     e = document.getElementById("img" + actual);
//     deleteClass(e, "visible");

//     actual++;
//     if (actual > total - 1) actual = 0;

//     e = document.getElementById("img" + actual);
//     addClass(e, "visible");
// }

// var slider = setInterval(nextImg, 3000);

// test2
// const sliderImages = document.querySelector('.slider-images');
// const sliderArrows = document.querySelectorAll('.slider-arrow');
// let currentSlide = 0;

// function goToSlide(slide) {
//   sliderImages.style.transform = translateX(-${slide * 33.333} "%");
//   currentSlide = slide;
// }

// function slidePrev() {
//   if (currentSlide === 0) {
//     goToSlide(2);
//   } else {
//     goToSlide(currentSlide - 1);
//   }
// }

// function slideNext() {
//   if (currentSlide === 2) {
//     goToSlide(0);
//   } else {
//     goToSlide(currentSlide + 1);
//   }
// }

// sliderArrows.forEach(function(arrow) {
//   arrow.addEventListener('click', function() {
//     if (arrow.classList.contains('slider-arrow-left')) {
//       slidePrev();
//     } else {
//       slideNext();
//     }
//   });
// });

// goToSlide(currentSlide);