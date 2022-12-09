import React from "react";
import { getNumber } from "../../../services/auxiliar";
import styles from "./statValue.module.scss"

export const StatValue = ({stat,pokemonType}) =>{

    const  getPercentage = (stat) =>(stat*0.5)+'%'
      
    return(
        <div className={styles.progress}>
            <span className={styles.stat}>
                {getNumber(stat)}
            </span>
                <div className={`progress-bar  ${pokemonType}`}>
                <span className="color" style={{width:getPercentage(stat) }}></span>
                </div>
        </div>
    )
}