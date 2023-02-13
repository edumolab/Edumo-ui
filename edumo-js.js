//Typewriter-js==*/
"user strict"
var TxtType = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
  this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
  this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 200 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
  delta = this.period;
  this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
  this.isDeleting = false;
  this.loopNum++;
  delta = 500;
  }

  setTimeout(function() {
  that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('typewrite');
  for (var i=0; i<elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-type');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtType(elements[i], JSON.parse(toRotate), period);
      }
  }
  
};



//Offcanvas-menu-js ===*
document.getElementById("data-toggler").addEventListener("click", function(){
  document.getElementById("myOffcanvas").style.width = "350px";
});
document.getElementById("closeBtn").addEventListener("click", function(){
  document.getElementById("myOffcanvas").style.width = "0px";
});

window.addEventListener("click",function(event){
  var canva=document.getElementById("myOffcanvas");
  if (event.target==canva){
    canva.style.width="0px"
  }
})

//Accordion elementi

var accord = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < accord.length; i++) {
  accord[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}

//Dropdown button
var x=document.getElementById('dropdown-content').style.display="none";
document.getElementById("dropdown").addEventListener("click", function(){
var x=document.getElementById('dropdown-content')
 if(x.style.display==="none"){
    x.style.display="block"
 }
 else{
    x.style.display="none"
 }
});


//Night-mode

document.getElementById('night-icon').style.display="none";
document.getElementById('day-icon').style.display="block";
document.getElementById('day-icon').addEventListener("click", function(){
var night=document.getElementById('night-icon');
var day=document.getElementById('day-icon');
    if(day.style.display === 'block'){
   document.getElementById('day-icon').style.display="none";
   document.getElementById('night-icon').style.display="block";
   document.body.classList.add("bg-dark")
    }
});

document.getElementById('night-icon').addEventListener("click", function(){
    document.getElementById('night-icon').style.display="block";
    var night=document.getElementById('night-icon');
    var day=document.getElementById('day-icon');
        if(night.style.display === 'block'){
        document.getElementById('night-icon').style.display="none";
       document.getElementById('day-icon').style.display="block";
       document.body.classList.remove("bg-dark")
        }
    });
        

/*Ripple button js===*/
function createRipple(event) {
  const button = event.currentTarget;

  const circle = document.createElement("span");
  const diameter = Math.max(button.clientWidth, button.clientHeight);
  const radius = diameter / 2;

  circle.style.width = circle.style.height = `${diameter}px`;
  circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
  circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
  circle.classList.add("ripple");

  const ripple = button.getElementsByClassName("ripple")[0];

  if (ripple) {
    ripple.remove();
  }

  button.appendChild(circle);
}

const buttons = document.getElementsByTagName("button");
for (const button of buttons) {
  button.addEventListener("click", createRipple);
}


//Modal elementi
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var myBtn= document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
myBtn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.addEventListener("click", function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});


