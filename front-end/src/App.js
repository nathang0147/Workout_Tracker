import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//Page && Component
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/SignUp";
import Navbar from "./component/Navbar";


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <div className="pages">

          <Routes>
            <Route
                exact path="/"
                element={<Home />}
            />

            <Route
                exact path="/signup"
                element={<Signup />}
            />

            <Route
                exact path="/Login"
                element={<Login />}
            />

          </Routes>
        </div>
      </Router>

    </div>
  );
}

export default App;
