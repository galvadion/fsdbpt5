import React from "react";
import { Link } from "react-router-dom";
import { capitalizeFirstLetter, getNumber } from "../../../services/auxiliar";
import styles  from "./title.module.scss";

export const Title = ({pokemon}) =>{
    return (
        <div className={styles.title}>
            <Link to="/">
                <img src="/icons/arrow-left.svg" />
            </Link>
            <h1>
                {capitalizeFirstLetter(pokemon.name)}
            </h1>
            <span>
                #{getNumber(pokemon.number)}
            </span>
        </div>
    )
}