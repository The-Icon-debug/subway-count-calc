let countEl = document.getElementById('count-el')
let previousEnt = document.getElementById('previous-ent')
//console.log(previousEnt)

let people = 0;

function incrementFunction(){
    people++;
    countEl.innerHTML = people;
}

function saveFunction(){
    previousEnt.innerHTML += people + ", ";
    people = 0;
    countEl.innerHTML = 0;
}