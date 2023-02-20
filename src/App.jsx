import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./components/Cart";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer"
import NavBar from "./components/NavBar"


const App = () => {
  return (
    <BrowserRouter>
    <NavBar greeting = "FunkoPops"/>

    <Routes>   
      <Route exact path="/" element={<ItemListContainer />}/>
      <Route exact path="/cart" element={<Cart/>}/>
      <Route exact path="/category/:categoryId" element={<ItemListContainer/>}/>      
      <Route exact path="/item/:id" element={<ItemDetailContainer/>}/> 
    </Routes>
    </BrowserRouter>   
  )
}

export default App