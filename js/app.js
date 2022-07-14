//create a score board that adds 1,2, or 3 points to the shown total

//connect html elements
//scores
let homeScore = document.querySelector('#home-score')
let guestScore = document.querySelector('#guest-score')
//buttons
let addOnePH = document.querySelector("#addOneH").addEventListener('click', addOnePointH)
let addTwoPH = document.querySelector("#addTwoH").addEventListener('click', addTwoPointsH)
let addThreePH = document.querySelector("#addThreeH").addEventListener('click', addThreePointsH)
let addOnePG = document.querySelector("#addOneG").addEventListener('click', addOnePointG)
let addTwoPG = document.querySelector("#addTwoG").addEventListener('click', addTwoPointsG)
let addThreePG = document.querySelector("#addThreeG").addEventListener('click', addThreePointsG)
let clearButton = document.querySelector("#clear").addEventListener('click', clear)

//set variables for score total
let homeTotal = 0;
let guestTotal = 0;

//add points 
    //home
function addOnePointH(){
        homeTotal++;
        homeScore.textContent = homeTotal;
}

function addTwoPointsH(){
    homeTotal+= 2;
    homeScore.textContent = homeTotal;
}

function addThreePointsH(){
    homeTotal+=3;
    homeScore.textContent = homeTotal;
}

    //guest
function addOnePointG(){
    guestTotal++;
    guestScore.textContent = guestTotal;
}

function addTwoPointsG(){
    guestTotal+=2;
    guestScore.textContent = guestTotal;
}

function addThreePointsG(){
    guestTotal+=3;
    guestScore.textContent = guestTotal;
}

function clear(){
    homeTotal = 0;
    homeScore.textContent = homeTotal;
    
    guestTotal = 0;
    guestScore.textContent = guestTotal;
}