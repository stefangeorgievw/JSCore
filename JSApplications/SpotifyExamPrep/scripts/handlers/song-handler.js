handlers.getAllSongs =  function (ctx) {
    ctx.isAuth = userService.isAuth();
    ctx.username = sessionStorage.getItem('username');
     songService.getAllSongs().then((songs) =>{
         songs.forEach(s=> s.isCreator = s._acl.creator === sessionStorage.getItem('id'))
        ctx.songs = {...songs};

     }).then(function(){
        ctx.loadPartials({
            header: '../templates/common/header.hbs',
            footer: '../templates/common/footer.hbs',
            song: './templates/song/song.hbs'
          }).then(function () {
            this.partial('../templates/song/allSongsPage.hbs');
          }).catch(function (err) {
            console.log(err);
          });
     });
  }
  handlers.getMySongs =  function (ctx) {
    ctx.isAuth = userService.isAuth();
    ctx.username = sessionStorage.getItem('username');
     songService.getMySongs().then((songs) =>{
         
        ctx.songs = {...songs};

     }).then(function(){
        ctx.loadPartials({
            header: '../templates/common/header.hbs',
            footer: '../templates/common/footer.hbs',
            song: './templates/song/mySong.hbs'
          }).then(function () {
            this.partial('../templates/song/mySongsPage.hbs');
          }).catch(function (err) {
            console.log(err);
          });
     });
  }

  handlers.removeSong =  function (ctx) {
     
    songService.removeSong(ctx.params.id).then(function (){

        notify.showInfo('Song remove successfully.');
        ctx.redirect('#/allSongs');
        return;
    }).catch(function(err){
        console.log(err);
    })
  }

  handlers.getCreateSong =  function (ctx) {
    ctx.isAuth = userService.isAuth();
    ctx.username = sessionStorage.getItem('username');
    ctx.loadPartials({
      header: '../templates/common/header.hbs',
      footer: '../templates/common/footer.hbs',
    }).then(function () {
      this.partial('../templates/song/createSongPage.hbs');
    }).catch(function (err) {
      console.log(err);
    });
  }

  handlers.createSong =  function (ctx) {
    let title = ctx.params.title;
    let artist = ctx.params.artist;
    let imageURL = ctx.params.imageURL;

    if(title.length < 6 || artist.length < 3 || !imageURL.startsWith('http')){
        notify.showError('Invalid input');
        ctx.redirect('#/createSong');
        return;
    }

    let obj = {
        title,
        artist,
        imageURL,
        listenCounter : +0,
        likesCounter: +0
    };

    songService.createNewSong(obj).then((res) => {
        notify.showInfo('Song created successfully.');
        this.redirect('#/allSongs');
    });
}

    handlers.listenSong =  function (ctx) {
        
        songService.getSong(ctx.params.id).then((song) => {
            let newListenCount = Number(song.listenCounter) + 1;
            song.listenCounter = newListenCount;
            songService.listenSong(song._id, song).then((res)=> {
                notify.showInfo('You just listened');
                this.redirect('#/allSongs');
            });
        }).catch(function(e){
            console.log(e);
        });
    }

  handlers.likeSong =  function (ctx) {
    songService.getSong(ctx.params.id).then((song) => {
        let newLikesCount = Number(song.likesCounter) + 1;
        song.likesCounter = newLikesCount;
        songService.likeSong(song._id, song).then((res)=> {
            notify.showInfo('Liked');
            this.redirect('#/allSongs');
        });
    }).catch(function(e){
        console.log(e);
    });
}
