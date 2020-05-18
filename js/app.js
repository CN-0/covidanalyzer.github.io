const ui = new UI(),
      covidapi = new CovidAPI();


function eventListners(){
    document.addEventListener('DOMContentLoaded', loading);
    
    const resultsDiv = document.querySelector('#stateStats');
     if(resultsDiv) {
         resultsDiv.addEventListener('click', resultsDelegation);
     }

    

}

eventListners();

function loading(){
    const resultsDiv = document.querySelector('#india');
    if (resultsDiv){
        ui.printStates();
    }
    else{
        ui.printCountries();
    }
    
}


// Delegation for the #results area
function resultsDelegation(e) {
    e.preventDefault();

    
    if(e.target.classList.contains('one')) {
        if(e.target.classList.contains('showing') ) {
              e.target.classList.remove('showing');
              if(e.target.classList.contains('onee')){
                e.target.src = "images/right.png";
                const table = e.target.parentElement.parentElement.parentElement.parentElement.parentElement;
                const row = e.target.parentElement.parentElement.parentElement.parentElement;
                var i = row.rowIndex;
                var j = table.rows[i].classList;
                while(j != "states"){
                    table.deleteRow(i); // when row is deleted index of below element decreases by 1 automatically so we no need to use i=i+1 to delete next element
                    j = table.rows[i].classList;
                  }  // j doesn't change automatically because we are still in loop so we need to change it manually since we need to change a global variable i used var
              }else{
                e.target.firstElementChild.childNodes[0].children[0].src = "images/right.png"
                const table = e.target.parentElement.parentElement;
                const row = e.target.parentElement;
                var i = row.rowIndex;
                var j = table.rows[i].classList;
                while(j != "states"){
                    table.deleteRow(i); 
                    j = table.rows[i].classList;
                  }
              }
            }else {
              // Add the class
              e.target.classList.add('showing');
              if(e.target.classList.contains('onee')){
                e.target.src = "images/up.png";
                const my = e.target.parentElement.parentElement.parentElement;
                ui.printDistricts(my);
              }else{
                e.target.firstElementChild.childNodes[0].children[0].src = "images/up.png";
                const ny = e.target;
                ui.printDistricts(ny);
              }
              
            }
          }
           
         
 } 


//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}