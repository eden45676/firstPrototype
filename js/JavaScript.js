function myFunction() {
    window.alert('This is a cat');
  }

function hamster(){
    
    document.getElementById("hamster").src="asset/hamster2.gif";
    
    
}
//drag and drop
function allowDrop(ev) {
    ev.preventDefault();
  }
  
  function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }
  
  function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
    document.getElementById("hamster").src="asset/hamster2.gif";
  }

  function toggleShow() {
    var x = document.getElementById("uvicDIV");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
    var y = document.getElementById("degreeDIV");
    if (y.style.display === "none") {
      y.style.display = "block";
    } else {
      y.style.display = "none";
    }
  }

  $(document).ready(function(){
    $('.owl-carousel').owlCarousel({
      loop:true,
      margin:10,
      nav:true,
     autoPlay: 1000,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:3
          },
          1000:{
              items:5
          }
      }
    })
  });
  
  