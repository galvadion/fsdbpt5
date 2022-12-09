import React from "react";
import styles from "./header.module.scss"

export const Header = ({sortedById,changeSort}) =>{

    const  getSort =() => sortedById ? "#" : "AZ"

    return (
        <div id={styles.header}>
            <img src="/icons/Pokeball.png" />
            <h1>Pokédex</h1>
            <span id={styles.sort} onClick={()=>changeSort(!sortedById)}>
                <span>{getSort()}</span>
                <img src="/icons/Arrow.svg" />
            </span>
        </div>
    )
    

}