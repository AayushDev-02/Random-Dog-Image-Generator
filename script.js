
// DOG API
// https://dog.ceo/api/breeds/image/random

// then - Promises
// asynchronous programming - our code does not run linearly anymore



// stuff u dont have to wait for
// console.log("Yooo1");




const dogImageDiv = document.querySelector("#dogImage");
const dogBtn = document.querySelector("#btn");

const getImage = () => {
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(responsoe => responsoe.json())
        .then(json => {
            dogImageDiv.innerHTML = `<img src='${json.message}' height=600 width=600/>`;

        }) 
    
}


dogBtn.onclick = () =>{
    
    getImage();
}


// stuff u have to wait for

