import React, {useEffect, useState} from "react";
import {Header} from "./header/header";
import styles from "./home.module.scss"
import {Card} from "./card/card";

export const Home = ({list}) => {

    const [sortedById, setSortedById] = useState(false)
    const [result, setResult] = useState([])

    const filter = (e) => setResult(list.filter((pokemon) => pokemon.name.toLowerCase().includes(e.target.value.toLowerCase())))

    const applySort = (a, b) => sortedById ? a.number - b.number : a.name.localeCompare(b.name)

    useEffect(() => {
        setResult(list)
    }, [list])

    return <div id={styles.wrapper}>
        <Header sortedById={sortedById} changeSort={setSortedById}/>
        <input type="text" onKeyUp={filter} placeholder="Buscar"/>
        <div id={styles.list}>
            {result.sort(applySort).map(pokemon => {
                return (<Card pokemon={pokemon}/>)
            })}
        </div>
    </div>
}


