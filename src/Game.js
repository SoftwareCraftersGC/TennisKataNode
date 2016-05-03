'use strict';

const Player = require('./Player.js');

function Game() {
    const playerOne = new Player();
    const playerTwo = new Player();

    function incrementScoreFor(player) {
        let increment = 15;

        if (player.score == 30)
            increment = 10;
        player.score += increment;
    }

    return {
        incrementScoreForFirstPlayer: () => {
            incrementScoreFor(playerOne);
        },
        incrementScoreForSecondPlayer : () =>{
            incrementScoreFor(playerTwo);
        },
        whoWins: () => {
            if (playerOne.score == 55) return 'PLAYER ONE';
            if (playerTwo.score == 55) return 'PLAYER TWO';
            return 'NONE';
        },
        playersScores: () => {
            return `${playerOne.score} - ${playerTwo.score}`;
        }
    }
}

module.exports = Game;
