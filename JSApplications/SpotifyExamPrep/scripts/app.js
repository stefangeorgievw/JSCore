const handlers = {}

$(() => {
  const app = Sammy('#root', function () {
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

    // ADD YOUR ROUTES HERE

    //song routes
    this.get('#/allSongs', handlers.getAllSongs);
    this.get('#/mySongs', handlers.getMySongs);
    this.get('#/createSong', handlers.getCreateSong);
    this.get('#/remove/:id', handlers.removeSong);
    this.get('#/listen/:id', handlers.listenSong);
    this.get('#/like/:id', handlers.likeSong);

    this.post('#/createSong', handlers.createSong);
  });
  app.run('#/home');
});