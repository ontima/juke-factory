'use strict';

juke.factory('StatsFactory', function($q){
  var statsObj = {};
  statsObj.totalTime = function (album) {
    var audio = document.createElement('audio');
    return $q(function (resolve, reject) {
      var sum = 0;
      var n = 0;
      function resolveOrRecur () {
        if (n >= album.songs.length) resolve(sum);
        else audio.src = album.songs[n++].audioUrl;
      }
      audio.addEventListener('loadedmetadata', function () {
        sum += audio.duration;
        resolveOrRecur();
      });
      resolveOrRecur();
    });
  };
  return statsObj;
});


juke.factory('AlbumGetter', function($http, $q) {
  var getters = {};

  getters.fetchAll = function(callback, cbfail) {

    return $http.get('/api/albums/')
    .then(function(response){
      return response.data;
    }, function(err) {
      console.log(err)
    })

  };

  getters.fetchById = function(id) {

    return $http.get('/api/albums/' + id)
    .then(function(response){
      return response.data;
    })

  };

  return getters;
});
