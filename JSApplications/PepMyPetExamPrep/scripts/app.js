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

    //pet routes
    this.get('#/dashboard', handlers.getDashboard);
    this.get('#/addPet', handlers.getAddPet);
    this.get('#/myPets', handlers.getMyPets);
    this.get('#/sureDelete/:id', handlers.getDelete);
    this.get('#/edit/:id', handlers.getMyPetDetails);
    this.get('#/details/:id', handlers.getOtherPetDetails);
    this.get('#/pet/:id', handlers.pet);
    this.get('#/dashboard/:category', handlers.getDashboardWithCategory);


    this.post('#/addPet', handlers.addPet);
    this.post('#/edit/:id', handlers.editMyPet);
    this.post('#/delete/:id', handlers.deletePet);

    // ADD YOUR ROUTES HERE
  });
  app.run('#/home');
});