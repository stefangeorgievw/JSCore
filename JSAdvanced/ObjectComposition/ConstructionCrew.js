function solve(obj){
    if(obj.handsShaking === false){
        return obj;
    }

    let bloodAlcoholLevel = (obj.weight / 10) * obj.experience;
    obj.bloodAlcoholLevel += bloodAlcoholLevel;
    obj.handsShaking = false;
    return obj;
}