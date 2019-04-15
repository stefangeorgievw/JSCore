const handlers = {}

$(() => {
  const app = Sammy('#container', function () {
    this.use('Handlebars', 'hbs');
    // home page routes
    this.get('/index.html', handlers.getHome);
    this.get('/', handlers.getHome);
    this.get('#/home', handlers.getHome);

    // user routes
    this.get('#/register', handlers.getRegister);
    this.get('#/login', handlers.getLogin);

    this.post('#/register', handlers.registerUser);
    this.post('#/login', handlers.loginUser);
    this.get('#/logout', handlers.logoutUser);

    // cinema routes
    this.get('#/cinema', handlers.getCinema);

    //movie routes
    this.get('#/addMovie', handlers.getAddMovie);
    this.get('#/myMovies', handlers.getMyMovies);
    this.get('#/movieDetails/:id', handlers.getMovieDetails);
    
    this.get('#/buyTicket/:id', handlers.buyTicket);
    this.get('#/editMovie/:id', handlers.getEditMovie);
    this.get('#/deleteMovie/:id', handlers.getDeleteMovie);

    this.post('#/addMovie', handlers.addMovie);
    this.post('#/editMovie/:id', handlers.editMovie);
    this.post('#/deleteMovie/:id', handlers.deleteMovie);
  });
  app.run('#/home');
});