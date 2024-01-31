import {BrowserRouter, Routes, Route} from "react-router-dom";
import NavBar from "./pages/NavBar";
import Home from "./pages/Home";
import New from "./pages/New";
import Popular from "./pages/Popular";
import Trending from "./pages/Trending";
import Categories from "./pages/Categories";

function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar/>
        
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/news" element={<New/>}/>
          <Route path="/popular" element={<Popular/>}/>
          <Route path="/trending" element={<Trending/>}/>
          <Route path="/categories" element={<Categories/>}/>
        </Routes>

      </BrowserRouter>
    </>
  )
}
export default App
