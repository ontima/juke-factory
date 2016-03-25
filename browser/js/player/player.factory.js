'use strict';

juke.factory('PlayerFactory', function($q){
  var tools = {};

  tools.start = function(audio){
    console.log(audio);
    // stop existing audio (e.g. other song) in any case
    // tools.pause();
    // $scope.playing = true;
    // resume current song
    // if (song === $scope.currentSong) return audio.play();
    // enable loading new song
    // $scope.currentSong = song;
    // audio.src = song.audioUrl;
    audio.load();
    audio.play();
  };

  tools.pause = function(audio){
    audio.pause();
    $scope.playing = false;
  };
  tools.resume = function() {
  };
  tools.isPlaying = function() {

  };
  tools.getCurrentSong = function() {

  };
  tools.next = function() {

  };
  tools.previous = function() {

  };
  tools.getProgress = function() {

  };

  return tools;



});//end factory
