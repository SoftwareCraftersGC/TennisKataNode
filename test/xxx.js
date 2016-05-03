'use strict'

const should = require('chai').should();

describe('A Tennis Game Should', () => {
    it('start with both players with zero points', () => {
        const game = Game();
        const player_one = game.getFirstPlayer();
        const player_two = game.getSecondPlayer();
        player_one.score.should.be.equal(0);
        player_two.score.should.be.equal(0);
    })
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
        getSecondPlayer : getSecondPlayer
    }

}

function Player() {
    let score = 0;

    return {
        score
    }
}
