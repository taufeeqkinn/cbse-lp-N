
// Responsive Menu 

const menu = document.querySelector(".menu");
const menuMain = menu.querySelector(".menu-main");
const goBack = menu.querySelector(".go-back");
const menuTrigger = document.querySelector(".mobile-menu-trigger");
const closeMenu = menu.querySelector(".mobile-menu-close");
let subMenu;
menuMain.addEventListener("click", (e) =>{
    if(!menu.classList.contains("active")){
        return;
    }
  if(e.target.closest(".menu-item-has-children")){
       const hasChildren = e.target.closest(".menu-item-has-children");
     showSubMenu(hasChildren);
  }
});
goBack.addEventListener("click",() =>{
     hideSubMenu();
})
menuTrigger.addEventListener("click",() =>{
     toggleMenu();
})
closeMenu.addEventListener("click",() =>{
     toggleMenu();
})
document.querySelector(".menu-overlay").addEventListener("click",() =>{
    toggleMenu();
})
function toggleMenu(){
    menu.classList.toggle("active");
    document.querySelector(".menu-overlay").classList.toggle("active");
}
function showSubMenu(hasChildren){
   subMenu = hasChildren.querySelector(".sub-menu");
   subMenu.classList.add("active");
   subMenu.style.animation = "slideLeft 0.5s ease forwards";
   const menuTitle = hasChildren.querySelector("i").parentNode.childNodes[0].textContent;
   menu.querySelector(".current-menu-title").innerHTML=menuTitle;
   menu.querySelector(".mobile-menu-head").classList.add("active");
}

function  hideSubMenu(){  
   subMenu.style.animation = "slideRight 0.5s ease forwards";
   setTimeout(() =>{
      subMenu.classList.remove("active");	
   },300); 
   menu.querySelector(".current-menu-title").innerHTML="";
   menu.querySelector(".mobile-menu-head").classList.remove("active");
}

window.onresize = function(){
    if(this.innerWidth >991){
        if(menu.classList.contains("active")){
            toggleMenu();
        }

    }
}

// brands container
$('.brand-slider').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: false,
    navText: [
      "<i class='fa fa-caret-left'></i>",
      "<i class='fa fa-caret-right'></i>"
    ],
    autoplay: true,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 5
      },
      600: {
        items: 3
      },
      992: {
        items: 10
      }
    }
  })
$('.about-slider').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: false,
    navText: [
      "<i class='fa fa-caret-left'></i>",
      "<i class='fa fa-caret-right'></i>"
    ],
    autoplay: true,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 3
      },
      600: {
        items: 3
      },
      992: {
        items: 7
      }
    }
  })

  $('.about-slider-card').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: false,
    navText: [
      "<i class='fa fa-caret-left'></i>",
      "<i class='fa fa-caret-right'></i>"
    ],
    autoplay: true,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      992: {
        items: 2
      }
    }
  })
$('.testimonails-slider').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: true,
    navText: [
      "<i class='fa fa-caret-left'></i>",
      "<i class='fa fa-caret-right'></i>"
    ],
    autoplay: true,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      },
      992: {
        items: 4
      }
    }
  })


// Start customized dropdowns
const selectButtons = document.querySelectorAll(".select-btn");

// Iterate over each select button
selectButtons.forEach((selectBtn) => {
  const optionMenu = selectBtn.closest(".select-menu"),
    options = optionMenu.querySelectorAll(".option"),
    sBtn_text = optionMenu.querySelector(".sBtn-text");

  // Remove "active" class from the optionMenu by default
  optionMenu.classList.remove("active");

  selectBtn.addEventListener("click", () =>
    optionMenu.classList.toggle("active")
  );

  options.forEach((option) => {
    option.addEventListener("click", () => {
      let selectedOption = option.querySelector(".option-text").innerText;
      sBtn_text.innerText = selectedOption;
      optionMenu.classList.remove("active");
    });
  });
});

// End customized dropdown


// Start video piop up container
$(document).ready(function() {
	$('.vid-slider .vid').on('click', function() {
  // get required DOM Elements
  var iframe_src = $(this).children('iframe').attr('src'),
        iframe = $('.video-popup'),
        iframe_video = $('.video-popup iframe'),
        close_btn = $('.close-video');
        iframe_src = iframe_src + '?autoplay=1&rel=0'; // for autoplaying the popup video
        
  // change the video source with the clicked one
  $(iframe_video).attr('src', iframe_src);
  $(iframe).fadeIn().addClass('show-video');
		
  // remove the video overlay when clicking outside the video
  $(document).on('click', function(e) {
    if($(iframe).is(e.target) || $(close_btn).is(e.target)) {
    $(iframe).removeClass('show-video');
    $(iframe_video).attr('src', '');
  }
		});
		
	});
  
});








