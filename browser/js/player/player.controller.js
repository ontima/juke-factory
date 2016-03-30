'use strict';

juke.controller('PlayerCtrl', function ($scope, $rootScope, PlayerFactory) {

  // initialize audio player (note this kind of DOM stuff is odd for Angular)
  // var audio = document.createElement('audio');
  // audio.addEventListener('ended', function () {
  //   $scope.next();
  //   // $scope.$apply(); // triggers $rootScope.$digest, which hits other scopes
  //   $scope.$evalAsync(); // likely best, schedules digest if none happening
  // });
  // audio.addEventListener('timeupdate', function () {
  //   $scope.progress = 100 * audio.currentTime / audio.duration;
  //   // $scope.$digest(); // re-computes current template only (this scope)
  //   $scope.$evalAsync(); // likely best, schedules digest if none happening
  // });

  $scope.isPlaying = function() {
    return PlayerFactory.isPlaying();
  }

  $scope.getCurrentSong = function() {
    return PlayerFactory.getCurrentSong();
  }

  // main toggle
  $scope.toggle = function (song) {
    if (PlayerFactory.isPlaying()) PlayerFactory.pause();
    else PlayerFactory.start(song);
  };

  // incoming events (from Album or toggle)
  $scope.$on('pause', pause);

  // functionality
  function pause () {
    PlayerFactory.pause();
    // audio.pause();
    // $scope.playing = false;
  }
  $scope.play = function(song){
   PlayerFactory.start(song);
 };

  // outgoing events (to Album… or potentially other characters)
  $scope.next = function () { PlayerFactory.pause(); PlayerFactory.skip(1); };
  $scope.prev = function () { PlayerFactory.pause(); PlayerFactory.skip(-1); };

});
