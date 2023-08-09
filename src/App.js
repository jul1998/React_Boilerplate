import { Home, SignupPage } from "./components";
import { Routes, Route } from "react-router-dom";
import { Navbar  } from "./components";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/sign-up" element={<SignupPage />} />
      </Routes>
      </div>
      
    </div>
  );
}

export default App;
