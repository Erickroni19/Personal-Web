import { addHeader } from '/components/header/header.js';

const doc = document;
const headerContainer = document.getElementById("header-container");
console.log(headerContainer);

doc.addEventListener("DOMContentLoaded", function(){
    addHeader(headerContainer);
});


