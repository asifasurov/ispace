import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import DataContext from './components/context/DataContext.jsx'
import Basketcontext from './components/context/Basketcontext.jsx'


createRoot(document.getElementById('root')).render(
  <Basketcontext>
    
      <DataContext>
        <App />
      </DataContext>
      
  </Basketcontext>
  
)
