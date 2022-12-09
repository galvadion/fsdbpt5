import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { capitalizeFirstLetter } from "../../services/auxiliar";
import styles from "./detail.module.scss"
import { StatValue } from "./statValues/statValue";
import { Title } from "./title/title";

export const Detail = ({list}) =>{

    const [pokemon,setPokemon] = useState(null)
    const [previousPokemonNumber,setPreviousPokemonNumber] = useState(null)
    const [nextPokemonNumber,setNextPokemonNumber] = useState(null)

    const { number } = useParams()

    useEffect(()=>{
        setPokemon(list.find((pokemon)=>pokemon.number == number ))
    },[list,number])

    useEffect(()=>{
        if(pokemon) getSurroundingPokemon()
    },[pokemon])

    const getSurroundingPokemon = ()=> {
        console.log(pokemon)
        if (pokemon.number !== 1) {
          setPreviousPokemonNumber(pokemon.number -1);
        }
        if (pokemon.number !== Math.max(...list.map((pokemon) => pokemon.number))) {
          setNextPokemonNumber(pokemon.number + 1);
        }
      }

    const stats =() =>Object.values(pokemon.stats)
    
    const keys = ()=> Object.keys(pokemon.stats).map((key)=> key.toUpperCase())
     
    return (
        <React.Fragment>
            {
                pokemon ? (
                    <div id={styles.pokemon} className={pokemon?.types[0].toLowerCase()}>
                    <div>
                        <Title pokemon={pokemon}/>
                        <div id={styles.center}>
                            {
                                previousPokemonNumber && (
                                    <Link to={`/${previousPokemonNumber}`}>
                                        <img id={styles.leftArrow} className={styles.arrow} src="/icons/Frame.svg" />
                                    </Link>
                                )
                            }
                            <img id={styles.pokemonImg} src={pokemon.img} />
                            {
                                nextPokemonNumber && (
                                    <Link to={`/${nextPokemonNumber}`}>
                                        <img id={styles.rightArrow} className={styles.arrow} src="/icons/Frame.svg" />
                                    </Link>
                                )
                            }
                            
                        </div>
                    </div>
                    <div id={styles.body}>
                        <div id={styles.types}>
                            {
                                pokemon.types.map((type)=>
                                    <span key={type} className={type}>
                                        {capitalizeFirstLetter(type)}
                                    </span>
                                )
                            }
                        </div>
                        <div className={styles.section} id={styles.about}>
                            <span className="color">About</span>
                            <div id={styles.characteristics}>
                                <div>
                                    <div>
                                        <img src="/icons/Weight.svg" />
                                        {pokemon.weight/10} Kg
                                    </div>
                                    <span>Weigth</span>
                                </div>
                                <div id={styles.height}>
                                    <div>
                                        <img src="/icons/Height.svg" />
                                        {pokemon.height/10} Kg
                                    </div>
                                    <span>Height</span>
                                </div>
                                <div>
                                    <div id={styles.moves}>
                                        {
                                            pokemon.moves.map(move=> {
                                                return (
                                                    <>{capitalizeFirstLetter(move)}<br/></>)
                                                })
                                        }
                                    </div>
                                    <span>Moves</span>
                                </div>
                            </div>
                            <p>{pokemon.description}</p>
                        </div>
                        <div className={`${styles.section} color`} id={styles.stats}>
                            <span> Stats</span>
                            <div>
                                <div id={styles.attributes}>
                                    {
                                        keys().map((key)=><span key={key}>{key}</span>)
                                    }
                                </div>
                                <div id={styles.statsValues}>
                                    {
                                        stats().map((stat)=><StatValue stat={stat} pokemonType={pokemon.types[0].toLowerCase()}  />)
                                    }
                                    
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                ) : null
            }
        
        </React.Fragment>
        
    )

    


}