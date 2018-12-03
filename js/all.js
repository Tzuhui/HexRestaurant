window.onload = function() {
  document.getElementById("hamburgerMenu").addEventListener("click", function(e){
    e.preventDefault();
    document.getElementById('mainMenu').classList.toggle('menu-show');
  });
  var like = document.querySelectorAll('.fa-heart');
  Array.from(like).forEach(link => {
      link.addEventListener('click', function(event) {
        this.classList.toggle('fas');
        this.classList.toggle('far');
      });
  });
};