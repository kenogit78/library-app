import "./scss/main.css";
import './index.css';
import Home from "./pages/Home"
import {BrowserRouter, Routes, Route} from "react-router-dom";
import SignUp from "./components/SignUp";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/signup" element={<SignUp />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
