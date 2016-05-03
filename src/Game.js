'use strict';

const Player = require('./Player.js');

function Game() {
    const playerOne = new Player();
    const playerTwo = new Player();

    function isThirdPoint(player) {
        return player.score() == 40
    }

    function hasAdvantage(player) {
        return player.score() == 50;
    }

    return {
        incrementScoreForFirstPlayer: () => playerOne.incrementScore(playerTwo),
        incrementScoreForSecondPlayer : () => playerTwo.incrementScore(playerOne),
        whoWins: () => {
            if (playerOne.hasWon(playerTwo)) {
                return 'PLAYER ONE';
            }
            if (playerTwo.hasWon(playerOne)) {
                return 'PLAYER TWO';
            }
            return 'NONE';
        },
        playersScores: () => {
            if (hasAdvantage(playerOne) && isThirdPoint(playerTwo)) return 'AD - 40';
            if (isThirdPoint(playerOne) && isThirdPoint(playerTwo)) return 'Deuce';
            return `${playerOne.score()} - ${playerTwo.score()}`;
        }
    }
}

module.exports = Game;
