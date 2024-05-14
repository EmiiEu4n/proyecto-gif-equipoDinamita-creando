import { useState } from "react"

export const ProyectoGif = () => {
  //Usando el Hook useState (función que permite agregar estado de React a los componentes funcionales)
  //Para evitar el posible error de Javascript por no definir un valor inicial, se le pone un arreglo que tenga 'One Punch' como valor inicial
  const[categories, setCategories] = useState(['One Punch']);

  return (
    <div>
        {/* Titulo */}
      <h1>ProyectoGif</h1>
        {/* Input */}
        {/* Listado de gifs */}
        {/* Gif item */}
    </div>
  )
}
