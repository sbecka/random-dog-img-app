'use strict';

//we need to target input value,
//value can only by 1-50 with a default value of 3

//access dog api with fetch and get the message of json
//message has image urls that need to be printed to console first

//Now need to display the images in DOM, by getting the message

function fetchDogs() {

    let numberOfDogs = $("#number-of-dogs").val(); //target input value

    if (numberOfDogs === '') { //default show 3 images
        console.log(3);
        fetch(`https://dog.ceo/api/breeds/image/random/3`)
        .then(response => response.json())
        .then(responseJson => showTheDogs(responseJson))
        .catch(error => alert(`Dog API Server is down.`));
        
    } else if (numberOfDogs >= 1 && numberOfDogs <= 50) { //between 1-50 images
        console.log(numberOfDogs);
        fetch(`https://dog.ceo/api/breeds/image/random/${numberOfDogs}`)
        .then(response => response.json())
        .then(responseJson => showTheDogs(responseJson))
        .catch(error => alert(`Dog API Server is down.`));

    } else {
        alert("Please enter any number between 1 and 50."); //alert only 1-50 images
    }
};

function showTheDogs(responseJson) {
    $(".results").show();
    $(".display-images").empty(); //empty any images shown before
    let dogArray = responseJson.message; //response is an array of urls

    for (let i = 0; i < dogArray.length; i++){
        $(".display-images").append(`<img src="${dogArray[i]}" class="dog-images">`);
    };

    console.log(dogArray);
};

function displayDogs() {
    $("form").submit(event => {
        event.preventDefault();
        fetchDogs();
        $("#number-of-dogs").val("");  //clear input after submit

    });  
};

$(displayDogs());