let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active')
}

let searchbar = document.querySelector('.searchbar');

document.querySelector('#search').onclick = () =>{
    searchbar.classList.toggle('active')
}

// Start animation
function startLoading() {
    const loadingLine = document.querySelector('.startline');
    loadingLine.style.animationPlayState = 'running';
  }
  
  // Stop animation
  function stopLoading() {
    const loadingLine = document.querySelector('.startline');
    loadingLine.style.animationPlayState = 'paused';
  }