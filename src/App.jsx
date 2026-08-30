import { useContext } from "react"
import Header from "./components/Header"
import Layout from "./layout/Layout"
import Router from "./router/Router"



function App() {
  
  
 
  return (
    <div>
      <Router />
    </div>
  )
}

export default App



// const { mehsul } = useContext(DATA);

//   // Konsolda məhsullara baxırıq
//   console.log('Context-dən gələn məhsullar:', mehsul);