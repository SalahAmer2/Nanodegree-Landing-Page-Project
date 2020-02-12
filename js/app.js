// jshint esversion: 6

/**
 * Define Global Variables
 *
*/
const sections = document.querySelectorAll("section");
var mybutton = document.getElementById("myBtn");
/**
 * End Global Variables
 * Start Helper Functions
 *
*/

const isScrolledIntoView = (elem) =>
{
    const docViewTop = $(window).scrollTop();
    const docViewBottom = docViewTop + $(window).height();

    const elemTop = $(elem).offset().top;
    const elemBottom = elemTop + $(elem).height();
    // console.log((elemBottom <= docViewBottom) && (elemTop >= docViewTop));  //true means in view
    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
};

/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

// build the nav
for (const section of sections){
  const dataNav = section.getAttribute("data-nav");
  const li = document.createElement("li");
  const anchor = document.createElement("a");
  li.innerHTML = dataNav;
  li.classList.add(`${section.id}`+"_link");
  const lc_dataNav = dataNav.toLowerCase();
  const lc_NoSpace_dataNav = lc_dataNav.replace(/ /g, "");
  anchor.href = "#"+lc_NoSpace_dataNav;
  const navBarList = document.getElementById("navbar__list");
  navBarList.appendChild(anchor).appendChild(li);
}



// Add class 'active' to section when near top of viewport

window.addEventListener('scroll', () =>{
  // $(".page__header").slideDown();

  sections.forEach(section => {
    if (isScrolledIntoView(section)) {
      section.classList.add("your-active-class");
      $("."+`${section.id}`+"_link")[0].classList.add("active");
    } else {
      section.classList.remove("your-active-class");
      $("."+`${section.id}`+"_link")[0].classList.remove("active");
    }
  });

  //This way is simpler but sometimes has visual mess ups like sliding up and down repeatedly on its own
  // setTimeout(() => {
  //       $(".page__header").slideUp();
  //   }, 3000);

  // So I used this way which is a bit more complicated but better visually (no mess ups)
  $(".page__header").slideDown();
  clearTimeout($.data(this, "scrollCheck"));
  $.data(this, "scrollCheck", setTimeout(function() {
    $(".page__header").slideUp();
  }, 2000));

  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
});

//For scroll to top button
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// To collapse sections
const toCollapse = (i)=>{
  $(".collapse" + i).click(()=>{
      $(".panel" + i).slideToggle("slow");
      $(".up" + i).toggle();
      $(".down" + i).toggle();
  });
};

for (let i=1; i<sections.length+1; i++){
  $(".down" + i).toggle();
  toCollapse(i);
}

// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu

// Scroll to section on link click

// Set sections as active
