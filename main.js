/* Function to toggle the responsive navigation menu (jainiben)*/
function navbar() {
  // Get the element with the ID "myTopnav"
  var x = document.getElementById("menu");
  // Check if the class name of the element is "topnav"
  if (x.className === "topnav") {
    // If the class name is "topnav", add the class "responsive"
    x.className += " responsive";
  } else {
     // If the class name is not "topnav", set the class name back to "topnav"
    x.className = "topnav";
  }
}   
/* Function to toggle the responsiveness of the footer(priyanka Rathod) */
function toggleFooter() {
  // Get the element with the class name "footer"
  var footer = document.querySelector('.footer');
  // Check if the class name of the element is "footer"
  if (footer.className === 'footer') {
    // If the class name is "footer", add the class "responsive"
    footer.className += ' responsive';
  } else {
    // If the class name is not "footer", set the class name back to "footer"
    footer.className = 'footer';
  }
}
