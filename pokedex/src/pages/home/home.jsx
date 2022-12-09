import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { adaptToDomain, capitalizeFirstLetter, getNumber } from "../../services/auxiliar";
import { Header } from "./header/header";
import styles from "./home.module.scss"

export const Home = ({list}) =>{

    const [sortedById, setSortedById] = useState(false)
    const [result,setResult] = useState([])

    const filter = (e) => setResult(list.filter((pokemon)=> pokemon.name.toLowerCase().includes(e.target.value.toLowerCase())))

    const applySort = (a,b) => sortedById ? a.number - b.number : a.name.localeCompare(b.name)

    useEffect(()=>{
        setResult(list)
    },[list])

    return (
        <div id={styles.wrapper}>
            <Header sortedById={sortedById} changeSort={setSortedById} />
            <input type="text"  onKeyUp={filter} placeholder="Buscar"/>
            <div id={styles.list}>
                {
                    result.sort(applySort).map(pokemon => {
                        return (
                            <Link key={pokemon.number} 
                                to={`/${pokemon.number}`} 
                                className={`${styles.pokemon} ${pokemon.types[0].toLowerCase()}`}>
                                <span className="color">
                                    <span >
                                        #{getNumber(pokemon.number)}
                                    </span>
                                    <img src={pokemon.img} />
                                </span>
                                <div>
                                    {capitalizeFirstLetter(pokemon.name)}
                                </div>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}


