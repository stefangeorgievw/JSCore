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
  let repeatPass = ctx.params.repeatPass;
  let email = ctx.params.email;
  let avatarUrl = ctx.params.avatarUrl;
  if (repeatPass !== password) {
    notifications.showError('Passwords must match');
    return;
  }
  

  let usernameRegex = /^[a-zA-Z]{3,}$/;
  if(usernameRegex.test(username) === false){
    notifications.showError('Username should be at least 3 characters long and should contain only english alphabet letters.')
    ctx.redirect('#/register');
    return;
  }

  let passwordRegex = /^[a-zA-Z0-9]{6,}$/;
  if(passwordRegex.test(password) === false){
    notifications.showError('Password should be at least 6 characters long and should contain only english alphabet letters and digits.')
    ctx.redirect('#/register');
    return;
  }

  userService.register(username, password, email, avatarUrl).then((res) => {
    userService.saveSession(res);
    notifications.showSuccess('User registration successful');
    ctx.redirect('#/memeFeed');
  }).catch(function (err) {
    console.log(err.responseJSON.description);
  });
}

handlers.logoutUser = function (ctx) {
  userService.logout().then(() => {
    sessionStorage.clear();
    notifications.showSuccess('User logged out successfully');
    ctx.redirect('#/home');
  })
}

handlers.loginUser = function (ctx) {
  let username = ctx.params.username;
  let password = ctx.params.password;

  let usernameRegex = /^[a-zA-Z]{3,}$/;
  if(usernameRegex.test(username) === false){
    notifications.showError('Username should be at least 3 characters long and should contain only english alphabet letters.')
    ctx.redirect('#/login');
    return;
  }

  let passwordRegex = /^[a-zA-Z0-9]{6,}$/;
  if(passwordRegex.test(password) === false){
    notifications.showError('Password should be at least 6 characters long and should contain only english alphabet letters and digits.')
    ctx.redirect('#/login');
    return;
  }
  userService.login(username, password).then((res) => {
    userService.saveSession(res);
    notifications.showSuccess('Login successful');
    ctx.redirect('#/memeFeed');
  }).catch(function (err) {
    notifications.showError(err.responseJSON.description);
  });
}

handlers.getUserProfile = function (ctx) {
  let id = ctx.params.id;
  ctx.isAuth = userService.isAuth();
  ctx.username = sessionStorage.getItem('username');
  ctx.id = sessionStorage.getItem('id');
  ctx.hasMemes = false;

  ctx.isCreator= id === sessionStorage.getItem('id');
  

  memeService.getAllMemes().then((memes) => {

    ctx.memes = memes.filter(x=> x._acl.creator === id);
    if(ctx.memes.length > 0){
      ctx.hasMemes = true;
    }

  }).then(function(){
    userService.getUser(id).then((user) =>{
      ctx.user = user;
    }).then(function(){
      ctx.loadPartials({
        header: '../templates/common/header.hbs',
        footer: '../templates/common/footer.hbs'
      }).then(function () {
        this.partial('../../templates/user/userProfile.hbs');
      }).catch(function (err) {
        console.log(err);
      });
    })
  })
}

handlers.deleteUser = function (ctx) {
  let id = ctx.params.id;
  
  userService.deleteUser(id).then((res) => {
    sessionStorage.clear();
    notifications.showSuccess('User deleted.');
    ctx.redirect('#/home');
  }).catch(function (err) {
    notifications.showError(err.responseJSON.description);
  });
}
