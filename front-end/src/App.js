import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';

//Page && Component
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/SignUp";
import Navbar from "./component/Navbar";
import useAuthContext from "./Hook/useAuthContext";


function App() {
  const {user} = useAuthContext();
  return (
    <div className="App">
      <Router>
        <Navbar />

        <div className="pages">

          <Routes>
            <Route
                exact path="/"
                element={user ?<Home />: <Navigate to="/login" />}
            />

            <Route
                exact path="/signup"
                element={!user ?<Signup />: <Navigate to="/" />}
            />

            <Route
                exact path="/Login"
                element={!user ? <Login /> : <Navigate to="/" />}
            />

          </Routes>
        </div>
      </Router>

    </div>
  );
}

export default App;
