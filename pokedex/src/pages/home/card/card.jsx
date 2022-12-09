import React from "react"
import {capitalizeFirstLetter, getNumber} from "../../../services/auxiliar";
import {Link} from "react-router-dom";
import styles from "./card.module.scss"

export const Card = ({pokemon}) => {

    return (<Link key={pokemon.number}
                  to={`/${pokemon.number}`}
                  className={`${styles.pokemon} ${pokemon.types[0].toLowerCase()}`}>
                <span className="color">
                    <span>
                        #{getNumber(pokemon.number)}
                    </span>
                    <img src={pokemon.img}/>
                </span>
                <div>
                    {capitalizeFirstLetter(pokemon.name)}
                </div>
            </Link>)
}
