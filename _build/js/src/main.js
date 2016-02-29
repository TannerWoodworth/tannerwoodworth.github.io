console.log("main.js success");
var showing = false;
function expandNav (e){
  event.preventDefault();
  if (showing == true){
    document.getElementsByTagName("nav")[0].setAttribute("class", "hidden");
    showing = false;
  } else if (showing == false){
    document.getElementsByTagName("nav")[0].setAttribute("class", "show");
    showing = true;
  };
};
function showBuild (e){
  console.log("build");
  document.getElementById('pg-home').setAttribute("class", "hide-section");
  document.getElementById('pg-about').setAttribute("class", "hide-section");
  document.getElementById('pg-cart').setAttribute("class", "hide-section");
  document.getElementById('pg-build').setAttribute("class", "show-section");
}
function showAbout (e){
  console.log("about");
  document.getElementById('pg-home').setAttribute("class", "hide-section");
  document.getElementById('pg-build').setAttribute("class", "hide-section");
  document.getElementById('pg-cart').setAttribute("class", "hide-section");
  document.getElementById('pg-about').setAttribute("class", "show-section");
}
function showCart (e){
  console.log("cart");
  document.getElementById('pg-home').setAttribute("class", "hide-section");
  document.getElementById('pg-about').setAttribute("class", "hide-section");
  document.getElementById('pg-build').setAttribute("class", "hide-section");
  document.getElementById('pg-cart').setAttribute("class", "show-section");
}
