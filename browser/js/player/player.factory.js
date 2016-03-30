'use strict';

juke.factory('PlayerFactory', function($q){
  var tools = {};
  var playing = false;
  var currentSong;

  var audio = document.createElement('audio');
  audio.addEventListener('ended', function () {
    tools.next();
    // $scope.$apply(); // triggers $rootScope.$digest, which hits other scopes
    //////fix this shit below
    // $scope.$evalAsync(); // likely best, schedules digest if none happening
  });
  // audio.addEventListener('timeupdate', function () {
  //   $scope.progress = 100 * audio.currentTime / audio.duration;
    // $scope.$digest(); // re-computes current template only (this scope)
    // $scope.$evalAsync(); // likely best, schedules digest if none happening
  });


  tools.start = function(song){
    console.log("song", song);
    if (song === currentSong) return
    audio.src = song.audioUrl;
    audio.load(song);
    audio.play(song);
    currentSong = song;


    // stop existing audio (e.g. other song) in any case
    // tools.pause();
    // $scope.playing = true;
    // resume current song
    // if (song === $scope.currentSong) return audio.play();

    // enable loading new song
    // $scope.currentSong = song;
    // audio.src = song.audioUrl;
    // audio.load();
    // audio.play();
  };

  tools.pause = function(audio){
    audio.pause();
    playing = false;
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
