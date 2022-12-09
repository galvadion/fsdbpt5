export const getNumber = (number) => number.toString().padStart(3,'0')

export const capitalizeFirstLetter = (string) => string.charAt(0).toUpperCase() + string.slice(1)

export const adaptToDomain =(pokemon) => {
    return {
        "number": pokemon.id,
        "img": pokemon.sprites.other['official-artwork']['front_default'],
        "name": pokemon.name,
        "height": pokemon.height,
        "weight": pokemon.weight,
        "moves": pokemon.moves.slice(0, 2).map((move) => move.move.name),
        "types": pokemon.types.map((type) => type.type.name),
        "stats": {
            "hp": pokemon.stats[0]["base_stat"],
            "atk": pokemon.stats[1]["base_stat"],
            "def": pokemon.stats[2]["base_stat"],
            "satk": pokemon.stats[3]["base_stat"],
            "sdef": pokemon.stats[4]["base_stat"],
            "spd": pokemon.stats[5]["base_stat"]
        }
    };
}