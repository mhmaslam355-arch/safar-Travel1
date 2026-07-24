function bookNow(destination){
  localStorage.setItem('selectedDestination', destination);
  window.location.href = "booking.html";
}

function logout(){
  window.location.href = "index.html"; 
}

function showBox(id){
  document.getElementById('mainBtns').style.display = 'none';
  document.getElementById('loginBox').style.display = 'none';
  document.getElementById('registerBox').style.display = 'none';
  document.getElementById(id).style.display = 'block';
}

function hideBoxes(){
  document.getElementById('loginBox').style.display = 'none';
  document.getElementById('registerBox').style.display = 'none';
  document.getElementById('mainBtns').style.display = 'flex';
}

function login(e){ 
  e.preventDefault(); 
  window.location.href = "offers.html";
}

function register(e){ 
  e.preventDefault(); 
  window.location.href = "offers.html";
}

window.onload = function() {
  let dest = localStorage.getItem('selectedDestination');
  if(dest && document.getElementById('destinationSelect')){
    document.getElementById('destinationSelect').value = dest;
    localStorage.removeItem('selectedDestination');
  }
}