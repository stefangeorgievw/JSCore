handlers.getCinema = function (ctx) {
    ctx.isAuth = userService.isAuth();
    ctx.username = sessionStorage.getItem('username');

    movieService.getAllMovies().then((movies) => {
        ctx.movies = movies;
    }).then(function(){
        ctx.loadPartials({
            header: '../templates/common/header.hbs',
            footer: '../templates/common/footer.hbs',
            movie: '../templates/movie/movie.hbs'
        }).then(function () {
            this.partial('templates/cinema/cinema.hbs');
        }).catch(function (err) {
            console.log(err);
        });
    })

    
}

handlers.getAddMovie = function (ctx) {
    ctx.isAuth = userService.isAuth();
    ctx.username = sessionStorage.getItem('username');

    ctx.loadPartials({
        header: '../templates/common/header.hbs',
        footer: '../templates/common/footer.hbs'
    }).then(function () {
        this.partial('templates/movie/addMovie.hbs');
    }).catch(function (err) {
        console.log(err);
    });
}

handlers.addMovie = function (ctx) {
    let title = ctx.params.title;
    let description = ctx.params.description;
    let imageUrl = ctx.params.imageUrl;
    let genresString = ctx.params.genres;
    let tickets = +ctx.params.tickets;

    let genres = genresString.split(' ');

    if (title.length < 6) {
        notifications.showError('Title should be atleast 6 characters long.');
        ctx.redirect('#/addMovie');
        return;
    }

    if (description.length < 6) {
        notifications.showError('Description should be atleast 10 characters long.');
        ctx.redirect('#/addMovie');
        return;
    }

    if(isNaN(tickets)){
        notifications.showError('Tickets input should be number.');
        ctx.redirect('#/addMovie');
        return;
    }

    if(!imageUrl.startsWith('http://') && !imageUrl.startsWith('https://')){
        notifications.showError('Invalid url.');
        ctx.redirect('#/addMovie');
        return;
    }

    movieService.addMovie(title, description, imageUrl, genres, tickets).then((res) =>{
      notifications.showSuccess('Movie created successfully.');
      ctx.redirect('#/cinema');
    }).catch(function (err){
        notifications.showError(err.responseJSON.description);
    });
}

handlers.buyTicket = function (ctx) {
    let id = ctx.params.id;

    movieService.getMovie(id).then((movie) => {

        if(movie.tickets === '0'){
            notifications.showError('No available tickets.');
            ctx.redirect('#/cinema');
            return;
        }
        movieService.buyTicket(movie).then((res) => {
            notifications.showSuccess(`Successfully bought ticket for ${res.title}`);
            ctx.redirect('#/cinema');
        }).catch(function (err){
        notifications.showError(err.responseJSON.description);
    });
    }).catch(function(err){
        console.log(err);
    })
    
}

handlers.getMovieDetails = function (ctx) {
    let id = ctx.params.id;
    ctx.isAuth = userService.isAuth();
    ctx.username = sessionStorage.getItem('username');

    movieService.getMovie(id).then((movie) =>{
        ctx.movie = movie;
        ctx.genresString = movie.genres.join(', ');
    }).then(function(){
        ctx.loadPartials({
            header: '../templates/common/header.hbs',
            footer: '../templates/common/footer.hbs'
        }).then(function () {
            this.partial('templates/movie/detailsMovie.hbs');
        }).catch(function (err) {
            console.log(err);
        });
    })
}

handlers.getMyMovies = function (ctx) {
    ctx.isAuth = userService.isAuth();
    ctx.username = sessionStorage.getItem('username');
    
    movieService.getMyMovies().then((movies) => {
        ctx.movies = movies;
        
        ctx.loadPartials({
            header: '../templates/common/header.hbs',
            footer: '../templates/common/footer.hbs'
        }).then(function () {
            this.partial('templates/movie/myMovies.hbs');
        }).catch(function (err) {
            console.log(err);
        });

    }).catch(function(err){
        console.log(err);
    })
}

handlers.getEditMovie = function (ctx) {
    let id = ctx.params.id;
    ctx.isAuth = userService.isAuth();
    ctx.username = sessionStorage.getItem('username');
    
    movieService.getMovie(id).then((movie) => {
        ctx.movie = movie;
        ctx.genresString = movie.genres.join(', ');
        ctx.loadPartials({
            header: '../templates/common/header.hbs',
            footer: '../templates/common/footer.hbs'
        }).then(function () {
            this.partial('templates/movie/editMovie.hbs');
        }).catch(function (err) {
            console.log(err);
        });

    }).catch(function(err){
        console.log(err);
    })
}

handlers.editMovie = function (ctx) {
    let id = ctx.params.id;
    let title = ctx.params.title;
    let description = ctx.params.description;
    let imageUrl = ctx.params.imageUrl;
    let genresString = ctx.params.genres;
    let tickets = ctx.params.tickets;

    let genres = genresString.split(', ');

    movieService.editMovie(id, title, description, imageUrl, tickets, genres).then((res) => {
        notifications.showSuccess('Movie edited successfully.')
        ctx.redirect(`#/myMovies`);
        return;
    }).catch(function(err){
         console.log(err);
    });
   
}

handlers.getDeleteMovie = function (ctx) {
    let id = ctx.params.id;
    ctx.isAuth = userService.isAuth();
    ctx.username = sessionStorage.getItem('username');
    
    movieService.getMovie(id).then((movie) => {
        
        ctx.movie = movie;
        ctx.genresString = movie.genres.join(', ');
        ctx.loadPartials({
            header: '../templates/common/header.hbs',
            footer: '../templates/common/footer.hbs'
        }).then(function () {
            this.partial('templates/movie/deleteMovie.hbs');
        }).catch(function (err) {
            console.log(err);
        });

    }).catch(function(err){
        console.log(err);
    })
}

handlers.deleteMovie = function (ctx) {
    let id = ctx.params.id;
   
    movieService.deleteMovie(id).then((res) => {
        notifications.showSuccess('Movie deleted successfully.')
        ctx.redirect(`#/myMovies`);
        return;
    }).catch(function(err){
         console.log(err);
    });
   
}