handlers.getRegister = function (ctx) {
  ctx.loadPartials({
    header: '../templates/common/header.hbs',
    footer: '../templates/common/footer.hbs'
  }).then(function () {
    this.partial('../../templates/user/registerPage.hbs');
  }).catch(function (err) {
    console.log(err);
  });
}

handlers.getLogin = function (ctx) {
  ctx.loadPartials({
    header: '../templates/common/header.hbs',
    footer: '../templates/common/footer.hbs'
  }).then(function () {
    this.partial('../../templates/user/loginPage.hbs');
  }).catch(function (err) {
    console.log(err);
  });
}

handlers.registerUser = function (ctx) {
  let username = ctx.params.username;
  let password = ctx.params.password;

  if(username.length < 3 || password.length < 6){
    notify.showError('Invalid data');
    ctx.redirect('#/register');
    return;
  }
  
  userService.register(username, password).then((res) => {
    userService.saveSession(res);
    notify.showInfo('User registered successfull.');
    ctx.redirect('#/login');
  }).catch(function (err) {
    notify.handleError(err.responseJSON.description);
  });
}

handlers.logoutUser = function (ctx) {
  userService.logout().then(() => {
    sessionStorage.clear();
    notify.showInfo('Logout successful.');
    ctx.redirect('#/login');
  })
}

handlers.loginUser = function (ctx) {
  let username = ctx.params.username;
  let password = ctx.params.password;
  
  userService.login(username, password).then((res) => {
    userService.saveSession(res);
    notify.showInfo('Login successful.');
    ctx.redirect('#/home');
  }).catch(function (err) {
    notify.showError(err.responseJSON.description);
  });
}