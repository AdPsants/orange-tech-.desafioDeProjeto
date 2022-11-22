class Pokemon {
    number;
    name;
    type;
    types = [];
    photo;
    detail;

    constructor(number, name, type, types, photo, detail){
        this.number = number;
        this.name = name;
        this.type = type;
        this.types = types;
        this.photo = photo;
        this.detail = detail;
    }

}

class PokemonFull extends Pokemon {
    abilities = [];
    height;
    weight;
}