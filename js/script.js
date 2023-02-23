// Toggle class active
const navbarNav = document.querySelector('.navbar-nav');


// Ketika hamburger menu diklik
document.querySelector('#hamburger-menu').onclick = () => {
  navbarNav.classList.toggle('active');   // toggle untuk membalik/switch attrib active
}


// Klik di luar sidebar untuk menghilangkan nav
const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function(e){
  // selama yg diklik bukan navbar atau hamburger
  if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)){
    navbarNav.classList.remove('active');
  }
});