'use strict';

juke.controller('AlbumsCtrl', function($scope, AlbumGetter, $rootScope, $log) {

  AlbumGetter.fetchAll(function(albums) {
     console.log("albums", albums)
     albums.forEach(function(album){
     	console.log("album: ", album);
     	album.imageUrl = '/api/albums/' + album._id + '.image';
	    //album.songs.forEach(function (song, i) {
	      //song.audioUrl = '/api/songs/' + song._id + '.audio';
	      //song.albumIndex = i;
	    //});  // end songs forEach
     }); // end albums forEach

     $scope.albums = albums;

  }, function(err) {
     console.log("AAH!", err)
  })
  // .then(function (albums) {
  //   //return AlbumGetter.fetchById(albums[0]._id);
  //   albums.forEach(function(album) {
	 //    album.imageUrl = '/api/albums/' + album._id + '.image';
	 //    album.songs.forEach(function (song, i) {
	 //      song.audioUrl = '/api/songs/' + song._id + '.audio';
	 //      song.albumIndex = i;
	 //    });
	 //    console.log(albums);
  //   })
  // })
  //   $scope.albums = albums;
  // })
  // .catch($log.error); // $log service can be turned on and off; also, pre-bound

}); // end controller


