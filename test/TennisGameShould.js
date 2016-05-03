'use strict'

const should = require('chai').should();

const Game = require('../src/Game.js');

describe('A Tennis Game Should', () => {

    let game;

    beforeEach(() => {
        game = Game();
    });

    it('start with both players with zero points', () => {
        game.playersScores().should.be.equal('0 - 0');
    });

    it('add 15 points when a player scores for the first time', () => {
        game.incrementScoreForFirstPlayer();
        game.playersScores().should.be.equal('15 - 0');
    });

    it('add 40 points when the first player scores three times', () => {
        game.incrementScoreForFirstPlayer();
        game.incrementScoreForFirstPlayer();
        game.incrementScoreForFirstPlayer();
        game.playersScores().should.be.equal('40 - 0');
    });

    it('add 40 points when the second player scores three times', () => {
        game.incrementScoreForSecondPlayer();
        game.incrementScoreForSecondPlayer();
        game.incrementScoreForSecondPlayer();
        game.playersScores().should.be.equal('0 - 40');
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

    it('have a deuce when both players have 40 points', () => {
        game.incrementScoreForFirstPlayer();
        game.incrementScoreForFirstPlayer();
        game.incrementScoreForFirstPlayer();
        game.incrementScoreForSecondPlayer();
        game.incrementScoreForSecondPlayer();
        game.incrementScoreForSecondPlayer();
        game.playersScores().should.be.equal('Deuce');
    });

    it('have a advantage when one player has him an advantage', () => {
        game.incrementScoreForFirstPlayer();
        game.incrementScoreForFirstPlayer();
        game.incrementScoreForFirstPlayer();
        game.incrementScoreForSecondPlayer();
        game.incrementScoreForSecondPlayer();
        game.incrementScoreForSecondPlayer();

        game.incrementScoreForFirstPlayer();
        game.playersScores().should.be.equal('AD - 40');
    });

    it('equal player scores when one has an advantage and the other scores', () => {
        game.incrementScoreForFirstPlayer();
        game.incrementScoreForFirstPlayer();
        game.incrementScoreForFirstPlayer();
        game.incrementScoreForSecondPlayer();
        game.incrementScoreForSecondPlayer();
        game.incrementScoreForSecondPlayer();

        game.incrementScoreForFirstPlayer();
        game.incrementScoreForSecondPlayer();
        game.playersScores().should.be.equal('Deuce');
    });

    it('a player wins after having an advantage', () => {
        game.incrementScoreForFirstPlayer();
        game.incrementScoreForFirstPlayer();
        game.incrementScoreForFirstPlayer();
        game.incrementScoreForSecondPlayer();
        game.incrementScoreForSecondPlayer();
        game.incrementScoreForSecondPlayer();

        game.incrementScoreForFirstPlayer();
        game.incrementScoreForFirstPlayer();
        game.whoWins().should.be.equal('PLAYER ONE');
    });

});
