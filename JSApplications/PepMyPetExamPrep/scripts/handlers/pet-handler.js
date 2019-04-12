handlers.getDashboard = function (ctx) {
    ctx.isAuth = userService.isAuth();
    ctx.username = sessionStorage.getItem('username');
    petService.getOtherPets().then((pets) => {

        ctx.pets = pets.filter(x => x._acl.creator !== sessionStorage.getItem('id'));

    }).then(function () {
        ctx.loadPartials({
            header: '../templates/common/header.hbs',
            footer: '../templates/common/footer.hbs',
            pet: './templates/pet/otherPetPage.hbs'
        }).then(function () {
            this.partial('../templates/dashboard/dashboard.hbs');
        }).catch(function (err) {
            console.log(err);
        });
    });
}

handlers.getDashboardWithCategory = function (ctx) {
    let category = ctx.params.category;
    console.log(category);
    ctx.isAuth = userService.isAuth();
    ctx.username = sessionStorage.getItem('username');
    petService.getOtherPets().then((pets) => {
        
        ctx.pets = pets.filter(x => x._acl.creator !== sessionStorage.getItem('id')).filter(x=> 
            x.category === category);

    }).then(function () {
        ctx.loadPartials({
            header: '../templates/common/header.hbs',
            footer: '../templates/common/footer.hbs',
            pet: './templates/pet/otherPetPage.hbs'
        }).then(function () {
            this.partial('../templates/dashboard/dashboard.hbs');
        }).catch(function (err) {
            console.log(err);
        });
    });
}

handlers.getAddPet = function (ctx) {
    ctx.isAuth = userService.isAuth();
    ctx.username = sessionStorage.getItem('username');

    ctx.loadPartials({
        header: '../templates/common/header.hbs',
        footer: '../templates/common/footer.hbs'
    }).then(function () {
        this.partial('../templates/pet/addPetPage.hbs');
    }).catch(function (err) {
        console.log(err);
    });
}

handlers.addPet = function (ctx) {
    let name = ctx.params.name;
    let description = ctx.params.description;
    let imageURL = ctx.params.imageURL;
    let category = ctx.params.category;

    petService.addPet(name, description, imageURL, category);
    
    notifications.showSuccess('Pet created.');
    ctx.redirect('#/dashboard');
}

handlers.getMyPets = function (ctx) {
    ctx.isAuth = userService.isAuth();
    ctx.username = sessionStorage.getItem('username');
    petService.getMyPets().then((pets) => {
        
        ctx.pets = pets;

    }).then(function () {
        ctx.loadPartials({
            header: '../templates/common/header.hbs',
            footer: '../templates/common/footer.hbs',
            pet: './templates/pet/myPetPage.hbs'
        }).then(function () {
            this.partial('../templates/pet/myPetsPage.hbs');
        }).catch(function (err) {
            console.log(err);
        });
    });
}

handlers.deletePet = function (ctx) {
    petService.deletePet(ctx.params.id).then(function(){
        notifications.showSuccess('Pet removed successfully!');
        ctx.redirect('#/dashboard');
    });

}

handlers.getMyPetDetails = function (ctx) {
    ctx.isAuth = userService.isAuth();
    ctx.username = sessionStorage.getItem('username');
    petService.getPet(ctx.params.id).then((pet) => {
        
        ctx.pet = pet;
        console.log(pet);

    }).then(function () {
        ctx.loadPartials({
            header: '../templates/common/header.hbs',
            footer: '../templates/common/footer.hbs',
        }).then(function () {
            this.partial('../templates/pet/myPetDetailsPage.hbs');
        }).catch(function (err) {
            console.log(err);
        });
    });
}

handlers.editMyPet = function (ctx) {
    
    petService.getPet(ctx.params.id).then((pet) => {
        petService.editMyPet(pet, ctx.params.description).then(function(){
            notifications.showSuccess('Updated successfully!');
            ctx.redirect('#/dashboard');
        });
    });
    
}

handlers.getOtherPetDetails = function (ctx) {
    ctx.isAuth = userService.isAuth();
    ctx.username = sessionStorage.getItem('username');
    petService.getPet(ctx.params.id).then((pet) => {
        
        ctx.pet = pet;
    

    }).then(function () {
        ctx.loadPartials({
            header: '../templates/common/header.hbs',
            footer: '../templates/common/footer.hbs',
        }).then(function () {
            this.partial('../templates/pet/otherPetDetailsPage.hbs');
        }).catch(function (err) {
            console.log(err);
        });
    });
}

handlers.pet = function (ctx) {
    
    petService.getPet(ctx.params.id).then((pet) => {
        petService.pet(pet).then(function(){
            ctx.redirect('#/dashboard');
        });
    });
    
}

handlers.getDelete = function (ctx) {
    ctx.isAuth = userService.isAuth();
    ctx.username = sessionStorage.getItem('username');
    petService.getPet(ctx.params.id).then((pet) => {
        
        ctx.pet = pet;
    

    }).then(function () {
        ctx.loadPartials({
            header: '../templates/common/header.hbs',
            footer: '../templates/common/footer.hbs',
        }).then(function () {
            this.partial('../templates/pet/deletePetPage.hbs');
        }).catch(function (err) {
            console.log(err);
        });
    });
}

