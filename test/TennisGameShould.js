'use strict'

const should = require('chai').should();

describe('A Tennis Game Should', () => {

    const game = Game();
    const player_one = game.getFirstPlayer();
    const player_two = game.getSecondPlayer();

    it('start with both players with zero points', () => {
        player_one.score.should.be.equal(0);
        player_two.score.should.be.equal(0);
    });

    it('add 15 points when a player scores for the first time', () => {
        player_one.score.should.be.equal(0);
        game.incrementScoreForFirstPlayer();
        player_one.score.should.be.equal(15);
    });
})

function Game() {
    const playerOne = new Player();
    const playerTwo = new Player();

    function getFirstPlayer() {
        return playerOne;
    }

    function getSecondPlayer() {
        return playerTwo;
    }

    return {
        getFirstPlayer : getFirstPlayer,
        getSecondPlayer : getSecondPlayer,
        incrementScoreForFirstPlayer: () => {
            playerOne.score += 15;
        }
    }

}

function Player() {
    let score = 0;

    return {
        score
    }
}
