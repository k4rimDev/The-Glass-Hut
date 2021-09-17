// function of Sliders

let i1 = 1;  
let width1= 20;
let i2 = 1;  
let width2= 20;
let i3 = 1;  
let width3= 20;
let i4 = 1;  
let width4= 20;
let iProg = 1;  
let widthProg= 20;

$(document).ready(function(){

 
  $('.section-slider01').on('click', '.decrement', function () {
    let counter = document.querySelector('.hut__item-slider01 .counter');
    let elem = document.querySelector('.hut__item-slider01 .bar');
    i1--;
    if(i1<=0)
    {
      i1=1;
    }
    counter.innerHTML = i1;
      if (width1 <= 100 && width1 >= 40) {
        width1 -= 20;
        elem.style.width = width1+ "%";
      }
  });
 
  $('.section-slider01').on('click', '.increment', function () {
    let counter = document.querySelector('.hut__item-slider01 .counter');
    let elem = document.querySelector('.hut__item-slider01 .bar');
    i1++;
    if(i1>=5)
      {
        i1=5;
      }
    counter.innerHTML = i1;
      if (width1 <= 80 && width1 >= 20) {
        width1 += 20;
        elem.style.width = width1 + "%";
      }
  });

  $('.section-slider02').on('click', '.decrement', function () {
    let counter = document.querySelector('.hut__item-slider02 .counter');
    let elem = document.querySelector('.hut__item-slider02 .bar');
    i2--;
    if(i2<=0)
    {
      i2=1;
    }
    counter.innerHTML = i2;
      if (width2 <= 100 && width2 >= 40) {
        width2 -= 20;
        elem.style.width = width2 + "%";
      }
  });
 
  $('.section-slider02').on('click', '.increment', function () {
    let counter = document.querySelector('.hut__item-slider02 .counter');
    let elem = document.querySelector('.hut__item-slider02 .bar');
    i2++;
    if(i2>=5)
      {
        i2=5;
      }
    counter.innerHTML = i2;
      if (width2 <= 80 && width2 >= 20) {
        width2 += 20;
        elem.style.width = width2 + "%";
      }
  });
// _---------------------------------------------------------
  $('.section-slider03').on('click', '.decrement', function () {
    let counter = document.querySelector('.hut__item-slider03 .counter');
    let elem = document.querySelector('.hut__item-slider03 .bar');
    i3--;
    if(i3<=0)
    {
      i3=1;
    }
    counter.innerHTML = i3;
      if (width3 <= 100 && width3 >= 40) {
        width3 -= 20;
        elem.style.width = width3 + "%";
      };
  });

  $('.section-slider03').on('click', '.increment', function () {
    let counter = document.querySelector('.hut__item-slider03 .counter');
    let elem = document.querySelector('.hut__item-slider03 .bar');
    i3++;
    if(i3>=5)
      {
        i3=5;
      }
    counter.innerHTML = i3;
      if (width3 <= 80 && width3 >= 20) {
        width3 += 20;
        elem.style.width = width3 + "%";
      }
  });

  $('.section-slider04').on('click', '.increment', function () {
    let counter = document.querySelector('.hut__item-slider04 .counter');
    let elem = document.querySelector('.hut__item-slider04 .bar');
    i4++;
    if(i4>=5)
      {
        i4=5;
      }
    counter.innerHTML = i4;
      if (width4 <= 80 && width4 >= 20) {
        width4 += 20;
        elem.style.width = width4 + "%";
      }
  });

  $('.section-slider04').on('click', '.decrement', function () {
    let counter = document.querySelector('.hut__item-slider04 .counter');
    let elem = document.querySelector('.hut__item-slider04 .bar');
    i4--;
    if(i4<=0)
    {
      i4=1;
    }
    counter.innerHTML = i4;
      if (width4 <= 100 && width4 >= 40) {
        width4 -= 20;
        elem.style.width = width4+ "%";
      }
  });
 





 
  $('.vesterborg__slider').on('click', '.increment', function () {
    let counter = document.querySelector('.vesterborg-slider .counter');
    let elem = document.querySelector('.vesterborg-slider .bar');
    iProg++;
    if(iProg>=5)
      {
        iProg=5;
      }
    counter.innerHTML = iProg;
      if (widthProg <= 80 && widthProg >= 20) {
        widthProg += 20;
        elem.style.width = widthProg + "%";
      }
  });

  $('.vesterborg__slider').on('click', '.decrement', function () {
    let counter = document.querySelector('.vesterborg-slider .counter');
    let elem = document.querySelector('.vesterborg-slider .bar');
    iProg--;
    if(iProg<=0)
      {
        iProg=1;
      }
    counter.innerHTML = iProg;
      if (widthProg <= 100 && widthProg >= 40) {
        widthProg -= 20;
        elem.style.width = widthProg + "%";
      }
  });
 

  
  $('.slider').slick({
      arrows: true,
      dots: true,
      autoplay:true,
      speed: 800,
      responsive: [
        {
          breakpoint: 960,
          settings: {
            arrows:false
          }
        }
      ]
  });

  $('.hut-slider').slick({
    arrows: false,
    autoplay:true,
    speed: 800,
    draggable: false,
    swipe: true,
  });
    $('.area-slider').slick({
    arrows: false,
    autoplay:true,
    speed: 800,
    draggable: false,
    swipe: true,
  });
  $('.about-slider').slick({
    arrows: false,
    autoplay:true,
    speed: 800,
    draggable: false,
    swipe: true,
  });

  $('.section-slider').slick({
    arrows: true,
    autoplay: false,
    speed: 150,
    infinite: false,
    draggable: false,
    swipe: false,
    nextArrow: '<button class="slick-next slick-arrow increment" aria-label="Next" type="button" aria-disabled="false" style>Next</button>',
    prevArrow: '<button class="slick-prev slick-arrow decrement" aria-label="Next" type="button" aria-disabled="false" style>Next</button>',
  });

  

});


const langMenu = document.querySelector(".lang-menu");
const langList = document.querySelector(".lang__list");
langMenu.addEventListener("click", function(){
    langList.classList.toggle("actived");
});



// Denmark link
$('.dk').click(function() { 

    $(".selected__lang").attr("src", "./images/icon/denmark.svg");
  
  });

// Germany Link
$('.de').click(function() { 

    $(".selected__lang").attr("src", "./images/icon/germany.svg");
  
  });

// England Link
$('.en').click(function() { 

    $(".selected__lang").attr("src", "./images/icon/united-kingdom.svg");
  
  })

// Tabs


function selectTab(tabIndex) {
  //Hide All Tabs
  document.getElementById('outsideTabContent1').style.display="none";
  document.getElementById('outsideTabContent2').style.display="none";

  //Show the Selected Tab 
  document.getElementById('outsideTabContent' + tabIndex).style.display="block";   


}

function selectTab2(tabIndex) {
  // inside
document.getElementById('insideTabContent1').style.display="none";
document.getElementById('insideTabContent2').style.display="none";
document.getElementById('insideTabContent3').style.display="none";

//Show the Selected Tab 
document.getElementById('insideTabContent' + tabIndex).style.display="block";  

}


function selectTab3(tabIndex) {
// Practice

document.getElementById('practiceTabContent1').style.display="none";
document.getElementById('practiceTabContent2').style.display="none";

//Show the Selected Tab 
document.getElementById('practiceTabContent' + tabIndex).style.display="block";   

let btns = document.querySelectorAll(".hut3-menu__item");
  for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("hut3-menu__item_active");
    current[0].className = current[0].className.replace(" hut3-menu__item_active", "");
    this.className += " hut3-menu__item_active";
    });
  }
}

function selectTab4(tabIndex) {
  // inside
document.getElementById('townTabContent1').style.display="none";
document.getElementById('townTabContent2').style.display="none";

//Show the Selected Tab 
document.getElementById('townTabContent' + tabIndex).style.display="block";  

}
 // Toggle



 let btn1 = document.querySelectorAll(".tab1");
 for (let i = 0; i < btn1.length; i++) {
   btn1[i].addEventListener("click", function() {
   var current = document.getElementsByClassName("tab1__active");
   current[0].className = current[0].className.replace(" tab1__active", "");
   this.className += " tab1__active";
   });
 };

 let btn2 = document.querySelectorAll(".tab2");
 for (let i = 0; i < btn2.length; i++) {
   btn2[i].addEventListener("click", function() {
   var current = document.getElementsByClassName("tab2__active");
   current[0].className = current[0].className.replace(" tab2__active", "");
   this.className += " tab2__active";
   });
 }

 let btn3 = document.querySelectorAll(".tab3");
 for (let i = 0; i < btn3.length; i++) {
   btn3[i].addEventListener("click", function() {
   var current = document.getElementsByClassName("tab3__active");
   current[0].className = current[0].className.replace(" tab3__active", "");
   this.className += " tab3__active";
   });
 }


 let btn4 = document.querySelectorAll(".tab4");
 for (let i = 0; i < btn4.length; i++) {
   btn4[i].addEventListener("click", function() {
   var current = document.getElementsByClassName("tab4__active");
   current[0].className = current[0].className.replace(" tab4__active", "");
   this.className += " tab4__active";
   });
 }


//  Accordion section

let acc = document.getElementsByClassName("fag-accordion");

for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("accordion-active");
    let panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

// Hamburger button
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".mobile-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".menu__item");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}