import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
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

          </Routes>
        </div>
      </Router>

    </div>
  );
}

export default App;
