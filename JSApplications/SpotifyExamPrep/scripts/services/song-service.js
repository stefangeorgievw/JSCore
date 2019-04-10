const songService = (() => {
    function getAllSongs() {
      return kinvey.get('appdata', 'songs?query={}&sort={"likesCounter": -1, "listenCounter": -1}', 'kinvey'); 
    }

    function getMySongs() {
        return kinvey.get('appdata', `songs?query={"_acl.creator":"${sessionStorage.getItem('id')}"}&sort={"likesCounter": -1, "listenCounter": -1}`, 'kinvey'); 
      }

    function createNewSong(data) {
        return kinvey.post('appdata', 'songs', 'kinvey', data); 
      }

      function removeSong(id){
          return kinvey.remove('appdata', `songs/${id}`, 'kinvey');
      }
       function listenSong(id, song){  
        return kinvey.update('appdata', `songs/${id}`, 'kinvey',song);
      }
      function likeSong(id, song){  
        return kinvey.update('appdata', `songs/${id}`, 'kinvey',song);
      }
      function getSong(id){
        return kinvey.get('appdata', `songs/${id}`, 'kinvey');
      }


  
  
    return {
      getAllSongs,
      getMySongs,
      createNewSong,
      removeSong,
      listenSong,
      getSong,
      likeSong
    }
  })()