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

    // meme routes
    this.get('#/memeFeed', handlers.getMemeFeed);
    this.get('#/createMeme', handlers.getCreateMeme);
    this.get('#/editMeme/:id', handlers.getEditMeme);
    this.get('#/deleteMeme/:id', handlers.deleteMeme);
    this.get('#/user/:id', handlers.getUserProfile);
    this.get('#/deleteUser/:id', handlers.deleteUser);

    this.post('#/createMeme', handlers.createMeme);
    this.post('#/editMeme/:id', handlers.editMeme);
  });
  app.run('#/home');
});