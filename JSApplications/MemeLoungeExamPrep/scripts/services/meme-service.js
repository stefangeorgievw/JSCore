const memeService = (() => {
  function getAllMemes() {
    return kinvey.get('appdata', 'memes?query={}&sort={"_kmd.ect": -1}', 'kinvey');
  }

  function createMeme(title, description, imageUrl) {
    return kinvey.post('appdata', 'memes', 'kinvey', {
      title,
      description,
      imageUrl,
      'creator': sessionStorage.getItem('username')
    });
  }

  function editMeme(meme, title, description, imageUrl) {
    return kinvey.update('appdata', `memes/${meme._id}`, 'kinvey', {
      title,
      description,
      imageUrl,
      'creator': sessionStorage.getItem('username')
    });
  }

  function getMeme(id) {
    return kinvey.get('appdata', `memes/${id}`, 'kinvey');
  }

  function deleteMeme(id) {
    return kinvey.remove('appdata', `memes/${id}`, 'kinvey');
  }


  return {
    getAllMemes,
    createMeme,
    getMeme,
    editMeme,
    deleteMeme
  }
})()