'use strict';

juke.factory('PlayerFactory', function($q, $rootScope){
  var tools = {};
  var playing = false;
  var currentSong;


  var audio = document.createElement('audio');
  audio.addEventListener('ended', function () {
    tools.next();
    $rootScope.$apply(); // triggers $rootScope.$digest, which hits other scopes
    //////fix this shit below
   $rootScope.$evalAsync(); // likely best, schedules digest if none happening
  });
   audio.addEventListener('timeupdate', function () {
     $rootScope.progress = 100 * audio.currentTime / audio.duration;
     $rootScope.$digest(); // re-computes current template only (this scope)
     $rootScope.$evalAsync(); // likely best, schedules digest if none happening
   });


  tools.start = function(song){
    console.log("song", song);
    console.log("rootScope: ", $rootScope);
    //if (song === currentSong) return
    playing = true;
    audio.src = song.audioUrl;
    audio.load(song);
    audio.play(song);
    currentSong = song;
    
  };

  tools.pause = function(){
    audio.pause();
    console.log("pausing");
    playing = false;
  };
  tools.resume = function() {
  };
  tools.isPlaying = function() {
    return playing;
  };
  tools.getCurrentSong = function() {
    return currentSong;
  };


  // a "true" modulo that wraps negative to the top of the range
  function mod (num, m) { return ((num % m) + m) % m; };

  // jump `interval` spots in album (negative to go back, default +1)
  tools.skip = function(interval) {
    if (!currentSong) return;
    var index = currentSong.albumIndex;
    console.log("current song index: ", index);
    index = mod( (index + (interval || 1)), $rootScope.album.songs.length );
    console.log("next index: ", index);
    currentSong = $rootScope.album.songs[index];
    console.log("playing: ", playing);
    tools.start(currentSong);
    //$rootScope.$broadcast('play', $scope.currentSong);
  };

  return tools;



});//end factory
