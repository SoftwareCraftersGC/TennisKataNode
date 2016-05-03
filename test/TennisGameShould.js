'use strict'

const should = require('chai').should();

describe('A Tennis Game Should', () => {

    let game;

    beforeEach(() => {
        game = Game();
    });

    it('start with both players with zero points', () => {
        game.scoreForFirstPlayer().should.be.equal(0);
        game.scoreForSecondPlayer().should.be.equal(0);
    });

    it('add 15 points when a player scores for the first time', () => {
        game.scoreForFirstPlayer().should.be.equal(0);
        game.incrementScoreForFirstPlayer();
        game.scoreForFirstPlayer().should.be.equal(15);
    });

    it('add 40 points when the first player scores three times', () => {
        game.incrementScoreForFirstPlayer();
        game.incrementScoreForFirstPlayer();
        game.incrementScoreForFirstPlayer();
        game.scoreForFirstPlayer().should.be.equal(40);
    });

    it('add 40 points when the second player scores three times', () => {
        game.incrementScoreForSecondPlayer();
        game.incrementScoreForSecondPlayer();
        game.incrementScoreForSecondPlayer();
        game.scoreForSecondPlayer().should.be.equal(40);
    });


    it('first player wins the game when scores four times', () => {
        game.incrementScoreForFirstPlayer();
        game.incrementScoreForFirstPlayer();
        game.incrementScoreForFirstPlayer();
        game.incrementScoreForFirstPlayer();
        game.whoWins().should.be.equal('PLAYER ONE');
    });

})

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

function Player() {
    let score = 0;

    return {
        score
    }
}
