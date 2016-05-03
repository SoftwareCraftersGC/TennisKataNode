'use strict'

const should = require('chai').should();

describe('A Tennis Game Should', () => {

    const game = Game();

    it('start with both players with zero points', () => {
        game.scoreForFirstPlayer().should.be.equal(0);
        game.scoreForSecondPlayer().should.be.equal(0);
    });

    it('add 15 points when a player scores for the first time', () => {
        game.scoreForFirstPlayer().should.be.equal(0);
        game.incrementScoreForFirstPlayer();
        game.scoreForFirstPlayer().should.be.equal(15);
    });
})

function Game() {
    const playerOne = new Player();
    const playerTwo = new Player();

    return {
        scoreForFirstPlayer: () => playerOne.score,
        scoreForSecondPlayer: () => playerTwo.score,
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
