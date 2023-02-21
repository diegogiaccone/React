import React, { useState } from 'react'

const Cart = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();    
  };
  return (
    <div className='forma'>
    <form className='formulario' onSubmit={handleSubmit}>
      <input className='controles' type="text" onChange={(e) => setNombre(e.target.value)} placeholder="Nombre" required/>
      <input className='controles' type="text" onChange={(e) => setApellido(e.target.value)} placeholder="Apellido" required/>
      <input className='controles' type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email" required/>
      <textarea className='textarea' placeholder="Comentario" required cols="30" rows="10"/>
      <button className='controles' type='submit'>Enviar Informacion</button>
    </form>
    </div>
  )
}

export default Cart