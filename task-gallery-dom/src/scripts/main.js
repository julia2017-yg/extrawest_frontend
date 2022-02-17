'use strict';

const thumbs = document.getElementById('thumbs');
const largeImg = document.getElementById('largeImg');

thumbs.addEventListener('click', (event) =>{
  event.preventDefault();
  let imageLink = event.target.closest('a');

  showThumb(imageLink.href, imageLink.title);
  
})

const showThumb = (href, title) => {
  largeImg.src = href;
  largeImg.alt = title;
}
