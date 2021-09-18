var btn = document.getElementById('jump-to-top');
window.addEventListener('scroll', function(){
   if (scrollY > 250) {
      btn.classList.add('show');
   } else {
      btn.classList.remove('show');
   }
})
btn.addEventListener('click', function(){
   window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
   });
})