const petService = (() => {
    function getOtherPets() {
        return kinvey.get('appdata', 'pets?query={}&sort={"likes": -1}', 'kinvey');
    }

    function getMyPets() {
        let userId = sessionStorage.getItem('id');
        
        return kinvey.get('appdata', `pets?query={"_acl.creator":"${userId}"}`, 'kinvey');
    }

    function addPet(name, description, imageURL, category) {

        let obj = {
            name,
            description,
            imageURL,
            category,
            likes: 0
        }
        return kinvey.post('appdata', 'pets', 'kinvey', obj);
    }
    
    function deletePet(id) {
        return kinvey.remove('appdata', `pets/${id}`, 'kinvey');
    }

    function getPet(id) {
        return kinvey.get('appdata', `pets/${id}`, 'kinvey');
    }

    function editMyPet(pet, description) {
        pet.description = description;
        return kinvey.update('appdata', `pets/${pet._id}`, 'kinvey', pet);
    }

    function pet(pet) {
        let likes = Number(pet.likes) + 1;
        pet.likes = likes;
        return kinvey.update('appdata', `pets/${pet._id}`, 'kinvey', pet);
    }

    return {
        getOtherPets,
        addPet,
        getMyPets,
        deletePet,
        getPet,
        editMyPet,
        pet
    }
})()