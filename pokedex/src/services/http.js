import {adaptToDomain} from "./auxiliar";

const url = "https://pokeapi.co/api/v2";

export const fetchData = async () => {
    let aux = []
    for (let number = 1; number < 151; number++) {
        await fetch(`${url}/pokemon/${number}`)
            .then(response => response.json())
            .then(pokemon => {
                aux.push(adaptToDomain(pokemon))
            })
    }
    return aux
}

export const getDescription = (number) =>
    fetch(`${url}/pokemon-species/${number}`)
        .then(response => response.json())
