console.log("main.js success");
var showing = false;
function expandNav (e){
  event.preventDefault();
  console.log(showing);
  if (showing == true){
    console.log("was true")
    document.getElementsByTagName("nav")[0].setAttribute("class", "hidden");
    showing = false;
  } else if (showing == false){
    console.log("was false")
    document.getElementsByTagName("nav")[0].setAttribute("class", "show");
    showing = true;
  };
};
function showBuild (e){

}
function showAbout (e){

}
function showCart (e){

}
