handlers.getRegister = function (ctx) {
  ctx.loadPartials({
    header: '../templates/common/header.hbs',
    footer: '../templates/common/footer.hbs'
  }).then(function () {
    this.partial('../../templates/user/register.hbs');
  }).catch(function (err) {
    console.log(err);
  });
}

handlers.getLogin = function (ctx) {
  ctx.loadPartials({
    header: '../templates/common/header.hbs',
    footer: '../templates/common/footer.hbs'
  }).then(function () {
    this.partial('../../templates/user/login.hbs');
  }).catch(function (err) {
    console.log(err);
  });
}

handlers.registerUser = function (ctx) {
  let username = ctx.params.username;
  let password = ctx.params.password;
  let repeatPassword = ctx.params.repeatPassword;

  if(username.length < 3){
    notifications.showError('Username should be atleast 3 characters long.');
    ctx.redirect('#/register');
    return;
  }

  if(password.length < 6){
    notifications.showError('Password should be atleast 6 characters long.');
    ctx.redirect('#/register');
    return;
  }

  if (repeatPassword !== password) {
    notifications.showError('Passwords must match');
    ctx.redirect('#/register');
    return;
  }
  userService.register(username, password).then((res) => {
    userService.saveSession(res);
    notifications.showSuccess('User registration successful.');
    ctx.redirect('#/cinema');
  }).catch(function (err) {
    notifications.showError(err.responseJSON.description);
  });
}

handlers.logoutUser = function (ctx) {
  userService.logout().then(() => {
    sessionStorage.clear();
    notifications.showSuccess('Logout successful.');
    ctx.redirect('#/home');
  })
}

handlers.loginUser = function (ctx) {
  let username = ctx.params.username;
  let password = ctx.params.password;
  userService.login(username, password).then((res) => {
    userService.saveSession(res);
    notifications.showSuccess('Login successful.');
    ctx.redirect('#/cinema');
  }).catch(function (err) {
    notifications.showError(err.responseJSON.description);
  });
}