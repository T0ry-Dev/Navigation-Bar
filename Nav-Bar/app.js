const mobileNav = document.querySelector('ul');
const showMore = document.querySelector('.show-more');

showMore.addEventListener('click', function(){
    mobileNav.classList.toggle('active');
    showMore.classList.toggle('active');
});