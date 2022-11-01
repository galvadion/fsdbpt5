import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import {Task} from "../model/task";
import { getTask } from "../services/httpConsumer";

const Form = ({addTaskToList, inputHasChanged,selectedTask}) =>{

    const [text, setText] = useState("")
    const [priority, setPriority] = useState("")
    const [isDisabled, setDisabled] = useState(true)

    let {id} = useParams();

    useEffect(()=>{
        if(selectedTask){
            console.log(selectedTask)
            setText(selectedTask.description)
            setPriority(selectedTask.priority)
        }
        
    },[selectedTask])

    useEffect(()=>{
        if(id){
           getTask(id,(data)=>{
            setText(data[0].description)
            setPriority(data[0].priority)
           },()=>{
            console.log("I'm done")
           })
        }
    },[])
    /*
    Cuando este componente se carga (escuchamos al []), realizar un fetch (GET->) a nuestro servidor
    para ir a buscar datos para renderizar en nuestra página, en este caso, vamos a ir a buscar, un elemento por id
    */
    

    const [isRepeated,setIsRepeated] = useState(false)

    const createTask = () =>{
        if(addTaskToList({description:text,priority:priority})){
            setText("")
            setPriority("")
        }else{
            setIsRepeated(true)
        }
    }

    /* Vamos a escuchar las variables de estado entre [] 
    en este caso texto y prioridad 
    Y ejecutamos la función de arriba, cuando estos cambien.
    */

    useEffect(()=>{
        setIsRepeated(false)
        if(inputHasChanged){
            inputHasChanged();
        }
        
    },[text])
    /*
        Cuando cambia solo el valor del texto, vamos:
        1 - indicar que ya no esta más repetido el campo.
        2 - Indicarle al padre (por intermedio de una función pasada por propiedades), 
        que el input ha cambiado
    */

    useEffect(()=>{
        setDisabled(ifFormIsEmpty())
    },[text,priority])
        /*
        Cuando cambiam tanto el texto como la prioridad, vamos a:
        Verificar si el formulario esta vacio, para setearlo o no como deshabilitado
    */

    const ifFormIsEmpty = () => text === "" || priority === "" 
    // funcion = () => result == funcion = () {return result} 


    return (
        <>
            <form action="#">
                {/* si isRepeated is true, mostrar error, de lo contrario nada */}
                {/* si isRepeated ?  error : '' */}
                <input
                    id="tarea"
                    type="text"
                    name="tarea"
                    value={text}
                    className={isRepeated ? 'error' :''}
                    onChange={(e)=>setText(e.target.value)}
                    placeholder="Descripción de la tarea"
                />
                <select 
                    	name="prioridad" 
                        id="prioridad" 
                        value={priority}
                        onChange={(e)=>setPriority(e.target.value)}>
                    <option value="" disabled>Prioridad</option>
                    <option value="prioridad-baja">baja</option>
                    <option value="prioridad-media">media</option>
                    <option value="prioridad-alta">alta</option>
                </select>
                <button 
                    type="button" 
                    id="agregar" 
                    onClick={createTask}
                    disabled={isDisabled}
                >Agregar!
                </button>
            </form>
            {/* Si isRepeated es verdadero (&&) renderizar lo que viene después*/}
            {
                isRepeated && <span>La tarea que has introducido, ya existe</span>
            }
        </>
        
      
    )
}

export default Form;