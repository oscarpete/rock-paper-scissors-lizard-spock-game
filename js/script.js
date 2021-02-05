function option(human) {
    let resultant = ["it's a TIE!", "You WIN!!", "You lose"]; //this are the variables that will be shown
    let name = ["✊", "📜", "✂️", "🦎", "🖖🏻"]; //this are the options

    let play = [  // --> here gos the logic of the game, who wins and who lose! this is a matrix
        [0, 1, 2, 2, 1],
        [2, 0, 1, 1, 2],
        [1, 2, 0, 2, 1],
        [1, 2, 1, 0, 2],
        [2, 1, 2, 1, 0]
    ];

    let descriptiveGame = [
        ["Is a TIE!", "Paper covers Rock", "Rock crushes Scissors", "Rock crushes Lizard", "Spock vaporizes Rock"],
        ["Paper covers Rock", "It is a TIE!", "Scissors cut Paper", "Lizard eats Paper", "Paper disproves Spock"],
        ["Rock crushes Scissors", "Scissors cut Paper", "It is a TIE!", "Scissors decapitate Lizard", "Spock smashes Scissors"],
        ["Rock crushes Lizard", "Lizard eats Paper", "Scissors decapitate Lizard", "It is a TIE!", "Lizard poisons Spock"],
        ["Spock vaporizes Rock", "Paper disproves Spock", "Spock smashes Scissors", "Lizard poisons Spock", "It is a TIE!"]
    ];

    let amountOfGameElements = 5;

    let pc = Math.floor((Math.random() * amountOfGameElements))

    let explanation = descriptiveGame[pc][human];

    let pcHas = descriptiveGame[pc];


    let result = play[pc][human];
    console.log("You have choose: " + name[human]);
    console.log("The computer strikes with: " + name[pc]);
    console.log(resultant[result]);
    console.log(explanation);

    // document.getElementById('user-score').innerText = name[human];
    // document.getElementById('comp-score').innerText = name[pc];
    // document.getElementById('reason').innerText = explanation;
    // document.getElementById('res').innerText = resultant[result];

    document.getElementById('r2').addEventListener('click', function () {
        document.getElementById('user-score').innerText = name[human];
    })
    document.getElementById('p').addEventListener('click', function () {
        document.getElementById('user-score').innerText = name[human];
    })

    document.getElementById('t').addEventListener('click', function () {
        document.getElementById('user-score').innerText = name[human];
    })
    document.getElementById('l').addEventListener('click', function () {
        document.getElementById('user-score').innerText = name[human];
    })

    document.getElementById('s').addEventListener('click', function () {
        document.getElementById('user-score').innerText = name[human];
    })


    document.getElementById('pcHas').addEventListener('click', function () {
        document.getElementById('comp-score').innerText = name[pc];
        document.getElementById('reason').innerText = explanation;
        document.getElementById('res').innerText = resultant[result];
    })


}

// document.getElementById('resetall').addEventListener('click', function () {
//     // window.setTimeout(reloadScript, 100);
//
// })