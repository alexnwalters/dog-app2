'use strict';
let x = '';

function getDogImage() {
    fetch(`https://dog.ceo/api/breed/${x}/images/random`)
      .then(response => response.json())
      .then(responseJson => 
        displayResults(responseJson))
      .catch(error => alert('Something went wrong. Try again later.'));
      
}
  
function displayResults(responseJson) {
    console.log(responseJson);
    $('.results').append(
    `<img src="${responseJson.message}" class="results-img" alt="breed not found">`
    )
}

function breedOfDog() {
    x = document.getElementById("breed").value;
    return x;
}

function removeOldDog() {
    $('img').remove('.results-img');
}

function watchForm() {
    $('form').submit(event => {
      event.preventDefault();
      removeOldDog();
      breedOfDog();
      getDogImage();
    });
}

function runDogApp() {
    console.log('App Loaded');
    watchForm();
}

$(runDogApp);