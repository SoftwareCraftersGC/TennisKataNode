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
        scoreForFirstPlayer: () => playerOne.score,
        scoreForSecondPlayer: () => playerTwo.score,
        incrementScoreForFirstPlayer: () => {
            incrementScoreFor(playerOne);
        },
        incrementScoreForSecondPlayer : () =>{
            incrementScoreFor(playerTwo);
        },
        whoWins: () => {
            if (playerOne.score == 55) return 'PLAYER ONE';
            return 'NONE';
        }

    }

}

module.exports = Game;
