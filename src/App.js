import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Flight from "./pages/Flight";
import Home from "./pages/Home";
import Hotel from "./pages/Hotel";
import Error from './pages/Error';
import Forex from "./Components/Forex";

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
      <Forex/>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/flights' element={<Flight/>}/>
          <Route exact path='/hotels' element={<Hotel/>}/>
          <Route exact path='/*' element={<Error/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
