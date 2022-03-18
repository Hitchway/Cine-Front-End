var myNav = document.getElementById('navegador');
var collapser = document.getElementById('navbarSupportedContent');
var buttonToggle = document.getElementById("botonToggle");

window.onscroll = function () { 
    'use strict';
    var myNav = document.getElementById('navegador');
    if (document.body.scrollTop >= 10 || document.documentElement.scrollTop >= 10 ) {
        myNav.classList.add("bgcolorScrolled");
        myNav.classList.remove("bgcolor");
    } 
    else {
        myNav.classList.add("bgcolor");
        myNav.classList.remove("bgcolorScrolled");
    }
};