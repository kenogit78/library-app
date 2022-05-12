import "./scss/main.css";
import './index.css';
import Home from "./pages/Home"
import {BrowserRouter, Routes, Route} from "react-router-dom";
import SignUp from "./components/Auth/SignUp";
import Welcome from "./components/Welcome";
import Dashboard from "./pages/Dashboard";
import ProtectedRoutes from "./components/ProtectedRoutes";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path="/home" element={<Home />}/>
            <Route path="/signup" element={<SignUp />}/>
            <Route path="/welcome" element={<Welcome />}/>

            <Route element={<ProtectedRoutes /> } >
              <Route path="/*" element={<Dashboard  />}/>
            </Route>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
