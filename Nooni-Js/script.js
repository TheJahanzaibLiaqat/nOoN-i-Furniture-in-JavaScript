gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(SplitText);

document.addEventListener('DOMContentLoaded', () => {
  const animateSlide = (slide) => {
    // Reset the animation state
    gsap.set(slide.querySelectorAll(".p1, .p2, .p3, .slide_img1, .slide_img2, .slide_img3"), {
      clearProps: "all" // Clear all animation properties to reset the state
    });

    // Animate text elements within the slide
    gsap.from(slide.querySelectorAll(".p1"), {
      duration: 3,
      text: "",
      newClass: "class2",
      delimiter: " ",
    });

    gsap.from(slide.querySelectorAll('.p2'), {
      duration: 5,
      ease: "bounce.out",
      stagger: 0.1,
      y: -300,
      opacity: 1,
    });

    gsap.from(slide.querySelectorAll('.p3'), {
      duration: 5,
      ease: "bounce.out",
      stagger: 0.1,
      x: 300,
      opacity: 1,
    });

    // Optionally animate images or other elements if needed
    gsap.from(slide.querySelectorAll('.slide_img1, .slide_img2, .slide_img3'), {
      duration: 3,
      ease: "bounce.out",
      x: 300,
      opacity: 0,
    });
  };

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Trigger animation for the visible slide
        animateSlide(entry.target);
        // Optionally stop observing after animation if needed
        // observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  // Observe each carousel slide
  document.querySelectorAll('.carousel-slide').forEach(slide => {
    observer.observe(slide);
  });
});


/////////////////////////////Mini navbar English///////////////////

$(".mini_nav_lang_item").hover(
  function () {
    $(".mini_nav_lang_item_items").show();
  },
  function () {
    $(".mini_nav_lang_item_items").hide();
  }
);

$(".mini_nav_lang_item_items").hover(function () {
  $(".mini_nav_lang_item_items").show();
});

/////////////////////////////Mini navbar USD///////////////////

$(".mini_nav_lang_item2").hover(
  function () {
    $(".mini_nav_lang_item_items2").show();
  },
  function () {
    $(".mini_nav_lang_item_items2").hide();
  }
);

$(".mini_nav_lang_item_items2").hover(function () {
  $(".mini_nav_lang_item_items2").show();
});

/////////////////////////////Left Menu Open///////////////////
$("#menu_open").click(function () {
  $(".left_slide_bar").animate({
    left: "0px",
  });

  $(".overlay").fadeIn();
});

/////////////////////////////Left Menu Close///////////////////

$(".menu_close").click(function () {
  $(".left_slide_bar").animate({
    left: "-400px",
  });
  $(".overlay").hide();
});

/////////////////////////////Right Menu Open///////////////////

$("#search_open").click(function () {
  $(" .right_slide_bar").animate({
    right: "0px",
  });

  $(".overlay").fadeIn();
});

/////////////////////////////Right Menu Open///////////////////

$(".search_close").click(function () {
  $(".right_slide_bar").animate({
    right: "-400px",
  });
  $(".overlay").hide();
});

/////////////////////////////Overlay for close///////////////////

$(".overlay").click(function () {
  $(".right_slide_bar").animate({
    right: "-400px",
  });
  $(".left_slide_bar").animate({
    left: "-400px",
  });
  $(".overlay").hide();
});

/////////////////////////////Carousel///////////////////

$(document).ready(function () {
  const slides = $(".carousel-slides");
  const totalSlides = $(".carousel-slide").length;
  let currentSlide = 0;
  let interval;

  $(".circle-buttons button").click(function () {
    const slideIndex = $(this).data("slide");
    changeSlide(slideIndex);
  });

  function autoPlay() {
    interval = setInterval(() => {
      currentSlide = (currentSlide + 1) % totalSlides;
      changeSlide(currentSlide);
    }, 5000);
  }

  function changeSlide(index) {
    currentSlide = index;
    const offset = -index * 100 + "%";
    slides.css("transform", `translateX(${offset})`);
    $(".circle-buttons button").removeClass("active");
    $(`.circle-buttons button[data-slide=${index}]`).addClass("active");
  }

  autoPlay();

  $(".carousel-container").hover(
    function () {
      clearInterval(interval);
    },
    function () {
      autoPlay();
    }
  );
});





$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    loop: true,           
    margin: 10,           
    nav: false,         
    dots: false,    
    autoplay: true,   
    autoplayTimeout: 5000,
    autoplayHoverPause: false,
    smartSpeed: 1000,  
    responsive: {
      0: {
        items: 1  
      },
      800: {
        items: 3  
      },
      400: {
        items: 2  
      },
      1000: {
        items: 4 
      }
    }
  });
});

/////////////////Show navbar on scroll////////////////
document.addEventListener('scroll', function() {
  var navbar = document.querySelector('.navbar');
  // var navbarOffset = navbar.offsetTop;
  var scrollDistance = 200;

  if (window.pageYOffset > scrollDistance) {
    navbar.classList.add('fixed-navbar');
  } else {
    navbar.classList.remove('fixed-navbar');
  }
});

//////////////////////////Profile data show on alert////////////////////

let email_inp = document.querySelector("#email_inp")
let password_inp = document.querySelector("#password_inp")

document.querySelector("#profile_btn").addEventListener("click", function(){
  // alert(`Email is: ${email_inp.value} and Password is: ${password_inp.value}`)

  
  if (email_inp.value === "" ||  password_inp.value === "" ) {
    alertify.notify('Enter Values First', 'danger', 5, function(){  console.log('dismissed'); });
  } else {
    alertify.notify(`Email is: ${email_inp.value} and Password is: ${password_inp.value}`, 'success', 5, function(){  console.log('dismissed'); });
    email_inp.value= ""
    password_inp.value= ""
  }
})

///////////////////////////////Add Cart/////////////////


$(".card_Pro").hover(function(){
  $(".card_btn").fadeIn(1000);  
},
function(){
  $(".card_btn").fadeOut(1000);  
});



////////////////////////////Cursor//////////////////////////

options = {
	"cursorOuter": "circle",
	"hoverEffect": "pointer-overlay",
	"hoverItemMove": false,
	"defaultCursor": false,
	"outerWidth": 30,
	"outerHeight": 30
      };
    magicMouse(options);



  // console.log(typeof magicMouse);

//////////////////Add Cart///////////////////

$("#cart_show").hover(function(){
  $(".add_to_cart").fadeIn()
},
function(){
  $(".add_to_cart").fadeOut()
}

)

$("#cart_show2").hover(function(){
  $(".add_to_cart2").fadeIn()
},
function(){
  $(".add_to_cart2").fadeOut()
}

)

$("#cart_show3").hover(function(){
  $(".add_to_cart3").fadeIn()
},
function(){
  $(".add_to_cart3").fadeOut()
}

)

$("#cart_show4").hover(function(){
  $(".add_to_cart4").fadeIn()
},
function(){
  $(".add_to_cart4").fadeOut()
}

)

$("#cart_show5").hover(function(){
  $(".add_to_cart5").fadeIn()
},
function(){
  $(".add_to_cart5").fadeOut()
}

)

$("#cart_show6").hover(function(){
  $(".add_to_cart6").fadeIn()
},
function(){
  $(".add_to_cart6").fadeOut()
}

)

$("#cart_show7").hover(function(){
  $(".add_to_cart7").fadeIn()
},
function(){
  $(".add_to_cart7").fadeOut()
}

)


document.querySelector(".cart_alert").addEventListener("click", function(){
  alertify.notify('Add To Cart', 'success', 5, function(){  console.log('dismissed'); });
})

document.querySelector(".cart_alert2").addEventListener("click", function(){
  alertify.notify('Add To Cart', 'success', 5, function(){  console.log('dismissed'); });
})

document.querySelector(".cart_alert3").addEventListener("click", function(){
  alertify.notify('Add To Cart', 'success', 5, function(){  console.log('dismissed'); });
})

document.querySelector(".cart_alert4").addEventListener("click", function(){
  alertify.notify('Add To Cart', 'success', 5, function(){  console.log('dismissed'); });
})

document.querySelector(".cart_alert5").addEventListener("click", function(){
  alertify.notify('Add To Cart', 'success', 5, function(){  console.log('dismissed'); });
})

document.querySelector(".cart_alert6").addEventListener("click", function(){
  alertify.notify('Add To Cart', 'success', 5, function(){  console.log('dismissed'); });
})

document.querySelector(".cart_alert7").addEventListener("click", function(){
  alertify.notify('Add To Cart', 'success', 5, function(){  console.log('dismissed'); });
})