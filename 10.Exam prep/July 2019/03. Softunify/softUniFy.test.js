const SoftUniFy = require("./softUniFy.js");
let assert = require('chai').assert;

describe('SoftUniFy', function() {
    let softunify;

    it('Should contain allSongs property', function() {
        softunify = new SoftUniFy();
        assert.isObject(softunify.allSongs);
    });

    it('downloadSong() - check function', function() {
        softunify = new SoftUniFy();
        softunify.downloadSong('a', 'b', 'c');
        assert.deepEqual(softunify.allSongs, { 'a': { rate: 0, votes: 0, songs: [ 'b - c'] }})
    });

    it('playSong() searches all download song', function() {
        softunify = new SoftUniFy();
        softunify.downloadSong('a', 'b', 'c');
        assert.equal(softunify.playSong('b'), 'a:\nb - c\n');
    });

    it('playSong() if does not have at least one downloaded song', function() {
        softunify = new SoftUniFy();
        assert.equal(softunify.playSong('b'), "You have not downloaded a b song yet. Use SoftUniFy's function downloadSong() to change that!");
    });

    it('playSong() if given song not found', function() {
        softunify = new SoftUniFy();
        softunify.downloadSong('a', 'b', 'c');
        assert.equal(softunify.playSong('d'), "You have not downloaded a d song yet. Use SoftUniFy's function downloadSong() to change that!");
    });

    it('rateArtist() sums the value of all votes and return average rate', function() {
        softunify = new SoftUniFy();
        softunify.downloadSong('a', 'b', 'c');
        assert.equal(softunify.rateArtist('d'), 'The d is not on your artist list.')
    });
});
