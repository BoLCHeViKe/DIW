const searchButton = document.querySelector("#searchButton");
const searchInput = document.querySelector("#searchInput");

searchButton.addEventListener('click',function(event) {
    event.preventDefault();
    toggleObject(searchInput);

});

// searchInput.addEventListener('focus',function() {
//     alert("searchInputasda");

// });

function toggleObject(objeto) {
    if (objeto.style.visibility!=="hidden") {
        objeto.style.visibility="hidden";
        
    }
    else{
        objeto.style.visibility="visible"; //o "block"o flex o lo que proceda
    }
    
}