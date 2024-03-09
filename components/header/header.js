
export function addHeader(nameContainer){
    'use strict'
    fetch("/components/header/header.html")
    .then(response => response.text())
    .then(html => {
        nameContainer.innerHTML = html;
    })
}