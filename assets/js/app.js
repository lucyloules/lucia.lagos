$(document).ready(function() {
  $('.parallax').parallax(); // parallax
  $('.button-collapse').sideNav(); // SideNav Initialization
  $('.carousel').carousel();
  
});

 
/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'assets/particles.json', function() {
  console.log('callback - particles.js config loaded');
});