import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Formulario from "./components/Formulario"
import Send from './components/Send'

function App() {

  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Formulario/>}/>
          <Route path='/emailSend' element={<Send/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App
