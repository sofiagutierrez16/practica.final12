import { useEffect, useState } from "react"

export const Peticion = ({buscarPersonaje}) => {

    const [personaje, setPersonaje] = useState ([])
    
    const getPersonaje = async () => {
    let respuesta = await 
fetch (`https://rickandmortyapi.com/api/character/?name=${buscarPersonaje}`)
    let datos = await respuesta.json()

    
    setPersonaje(datos.results)
    }

    useEffect (()=> {
        getPersonaje()
     },[buscarPersonaje])

    return <>
      {personaje.map((element, index) => {
        return <div key={index}>
            <input type="text" />
            <button>ACEPTA</button>

        </div>


      })}
    
    </>

}