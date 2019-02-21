class Rat{
    constructor(name){
        this.name = name;
        this.unitedRats = [];
    }

    getRats(){
        return this.unitedRats;
    }

    unite(rat){
        if(typeof rat === 'object'){
            this.unitedRats.push(rat);  
        } 
    }

    toString(){
        if(this.unitedRats.length === 0){
            return this.name;
        }
        let displayRats = [];
        this.unitedRats.forEach(x=> displayRats.push(`##${x.name}`));
        
        return `${this.name}\n${displayRats.join("\n")}`;
    }

}
