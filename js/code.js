function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function choose(play) {
    let result = "";
    if (play == 1) {
        result = "You chose 🥌 ";
    } else if (play == 2) {
        result = "You chose 🧻 ";
    } else if (play == 3) {
        result = "You chose ✂️ ";
    } else {
        result = "Invalid choice";
    }

    return result;
}
// 1 = rock, 2 = paper, 3 = scissors
let player = 0;
let computer = 0;
let wins = 0;
let losses = 0;
let ties = 0;

while (wins < 3 && losses < 3) {
    computer = random(1, 3);
    player = prompt("Enter 1 for rock, 2 for paper, or 3 for scissors");

    alert("Computer chose " + choose(computer));
    alert("You chose " + choose(player));

    // Combat
    if (player == computer) {
        alert("Tie");
        ties += 1;
    } else if (player == 1 && computer == 3) {
        alert("You win");
        wins += 1;
    } else if (player == 2 && computer == 1) {
        alert("You win");
        wins += 1;
    } else if (player == 3 && computer == 2) {
        alert("You win");
        wins += 1;
    } else {
        alert("You lose");
        losses += 1;
    }
}

alert("You won " + wins + " times, lost " + losses + " times, and tied " + ties + " times.");
alert("Thanks for playing!");
