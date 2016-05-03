'use strict'

const should = require('chai').should();

const Game = require('../src/Game.js');

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

    it('second player wins the game when scores four times', () => {
        game.incrementScoreForSecondPlayer();
        game.incrementScoreForSecondPlayer();
        game.incrementScoreForSecondPlayer();
        game.incrementScoreForSecondPlayer();
        game.whoWins().should.be.equal('PLAYER TWO');
    });

});
