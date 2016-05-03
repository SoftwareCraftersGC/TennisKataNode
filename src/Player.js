'use strict';

function Player() {
    let _score = 0;

    function incrementScore(opponent) {
        if (opponent.score() == 50 && _score == 40) {
            opponent.setScore(40);
            _score = 40;
            return;
        }

        let increment = 15;

        if (_score >= 30)
            increment = 10;
        _score += increment;

    }

    function hasWon(opponent) {
        return _score > 50 && opponent.score() == 40 ||
               _score == 50 && opponent.score() < 40;
    }

    return {
        score : () => _score,
        setScore : (score) => _score = score,
        incrementScore : incrementScore,
        hasWon
    };
}


module.exports = Player;
