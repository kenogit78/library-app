import "./scss/main.css";
import './index.css';
import Home from "./pages/Home"
import {BrowserRouter, Routes, Route} from "react-router-dom";
import SignUp from "./components/Auth/SignUp";
import Welcome from "./components/Welcome";
// import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/signup" element={<SignUp />}/>
            <Route path="/welcome" element={<Welcome />}/>
            {/* <Route path="/dashboard" element={<Dashboard />}/> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
