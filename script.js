// Juice item click alert

document.querySelectorAll('.item').forEach(function(card){
    card.addEventListener('click', function(){
      alert(this.textContent + " selected!");
    });
  });