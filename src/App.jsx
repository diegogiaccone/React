import ItemListConteiner from "./components/ItemListContainer"
import NavBar from "./components/NavBar"

const App = () => {
  return (
    <div>
      <NavBar greeting = "FunkoPops"/>
      <ItemListConteiner />
    </div>
  )
}

export default App