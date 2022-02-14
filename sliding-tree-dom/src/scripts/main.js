'use strict';

const li = document.querySelectorAll('li');

li.forEach(element => {
  element.addEventListener('click', event => {    
    event.stopPropagation();  
    event.currentTarget.classList.toggle('active');
  });
    
})
