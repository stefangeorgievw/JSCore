handlers.getMemeFeed = function (ctx) {
    ctx.isAuth = userService.isAuth();
    ctx.username = sessionStorage.getItem('username');
    ctx.id = sessionStorage.getItem('id');

    memeService.getAllMemes().then((memes) => {
        memes.forEach(m => m.isCreator = m._acl.creator === sessionStorage.getItem('id'))
        ctx.memes = memes;
        if (memes.length === 0) {
            ctx.hasMemes = false;
        } else {
            ctx.hasMemes = true;
        }
    }).then(function () {
        ctx.loadPartials({
            header: '../templates/common/header.hbs',
            footer: '../templates/common/footer.hbs',
            meme: 'templates/meme/meme.hbs'
        }).then(function () {
            this.partial('templates/meme/memeFeed.hbs');
        }).catch(function (err) {
            console.log(err);
        });
    })

}

handlers.getCreateMeme = function (ctx) {
    ctx.isAuth = userService.isAuth();
    ctx.username = sessionStorage.getItem('username');
    ctx.id = sessionStorage.getItem('id');

    ctx.loadPartials({
        header: '../templates/common/header.hbs',
        footer: '../templates/common/footer.hbs'
    }).then(function () {
        this.partial('templates/meme/createMeme.hbs');
    }).catch(function (err) {
        console.log(err);
    });
}

handlers.createMeme = function (ctx) {
    let title = ctx.params.title;
    let description = ctx.params.description;
    let imageUrl = ctx.params.imageUrl;

    if (title.length < 1 || title.length > 33) {
        notifications.showError('Title can\'t be empty or more than 33 symbols');
        ctx.redirect('#/createMeme');
    }

    if (description.length < 30 || description.length > 450) {
        notifications.showError('Description can\'t be less than 30 or more than 450 symbols');
        ctx.redirect('#/createMeme');
    }

    if (imageUrl.startsWith('http') === false) {
        notifications.showError('Invalid image Url');
        ctx.redirect('#/createMeme');
    }

    memeService.createMeme(title, description, imageUrl).then((res) => {
        notifications.showSuccess('meme created.');
        ctx.redirect('#/memeFeed');
    }).catch(function (err) {
        notifications.showError(err.responseJSON.description);
    });
}

handlers.getEditMeme = function (ctx) {
    let id = ctx.params.id;
    ctx.isAuth = userService.isAuth();
    ctx.id = sessionStorage.getItem('id');
    ctx.username = sessionStorage.getItem('username');

    memeService.getMeme(id).then((meme) => {

        ctx.meme = meme;
    }).then(function () {
        ctx.loadPartials({
            header: '../templates/common/header.hbs',
            footer: '../templates/common/footer.hbs'
        }).then(function () {
            this.partial('templates/meme/editMeme.hbs');
        }).catch(function (err) {
            console.log(err);
        });
    });
}

handlers.editMeme = function (ctx) {
    let id = ctx.params.id;
    let title = ctx.params.title;
    let description = ctx.params.description;
    let imageUrl = ctx.params.imageUrl;

    if (title.length < 1 || title.length > 33) {
        notifications.showError('Title can\'t be empty or more than 33 symbols');
        ctx.redirect('#/createMeme');
    }

    if (description.length < 30 || description.length > 450) {
        notifications.showError('Description can\'t be less than 30 or more than 450 symbols');
        ctx.redirect('#/createMeme');
    }

    if (imageUrl.startsWith('http') === false) {
        notifications.showError('Invalid image Url');
        ctx.redirect('#/createMeme');
    }
    memeService.getMeme(id).then((meme) => {
       memeService.editMeme(meme, title, description, imageUrl).then((res) => {

        notifications.showSuccess(`Meme ${res.title} update.`)
        ctx.redirect('#/memeFeed');
    }).catch(function(err){
       notifications.showError(err.responseJSON.description);
    });
    }); 
}

handlers.deleteMeme = function (ctx) {
    let id = ctx.params.id;

    memeService.deleteMeme(id).then((res) => {
       notifications.showSuccess('Meme deleted.');
       ctx.redirect('#/memeFeed');
    }).catch(function(err){
        notifications.showError(err.responseJSON.description);
    })
}