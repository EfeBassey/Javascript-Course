function ageInDays(){
    var birthYear = prompt("What year were you born...Good friend?");
    var ageInDayss = (2022  - birthYear) * 365;
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode('You are' + " " + ageInDayss + 'days old');
    h1.setAttribute('id','ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
}

function reset() {
    document.getElementById('ageInDays').remove();
}

//Challenge 2: Character Generator
function generateCharacter() {
    var image = document.createElement('img');
    var div = document.getElementById("flex-character-gen");
    image.src ="https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/SpongeBob_SquarePants_character.svg/220px-SpongeBob_SquarePants_character.svg.png";
    div.appendChild(image);
}