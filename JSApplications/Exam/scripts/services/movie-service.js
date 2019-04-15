const movieService = (() => {
  function addMovie(title, description, imageUrl, genres, tickets) {
    return kinvey.post('appdata', 'movies', 'kinvey', {
      title,
      description,
      imageUrl,
      genres,
      tickets
    })
  }

  function editMovie(id, title, description, imageUrl, tickets, genres) {
    return kinvey.update('appdata', `movies/${id}`, 'kinvey', {
      title,
      description,
      imageUrl,
      genres,
      tickets
    })
  }

  function deleteMovie(id) {
    return kinvey.remove('appdata', `movies/${id}`, 'kinvey');
  }

  function getAllMovies() {
    return kinvey.get('appdata', 'movies?query={}&sort={"tickets": -1}', 'kinvey');
  }

  function getMyMovies() {
    return kinvey.get('appdata', `movies?query={"_acl.creator":"${sessionStorage.getItem('id')}"}&sort={}`, 'kinvey');
  }

  function buyTicket(movie) {
    let tickets = Number(movie.tickets) - 1;
    movie.tickets = tickets;

    return kinvey.update('appdata', `movies/${movie._id}`, 'kinvey', movie);
  }



  function getMovie(id) {
    return kinvey.get('appdata', `movies/${id}`, 'kinvey');
  }





  return {
    addMovie,
    getAllMovies,
    getMovie,
    buyTicket,
    getMyMovies,
    editMovie,
    deleteMovie
  }
})()