import "./App.css";
import Home from "./home/Home";
import Resources from "./Pages/resources/Resources";
import RoadMaps from "./Pages/roadmaps/RoadMaps";
import WhitePaper from "./Pages/whitepaper/WhitePaper";
import Terms from "./Pages/terms/Terms";
import PrivatePolicy from "./Pages/privatepolicy/PrivatePolicy";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/roadmaps" element={<RoadMaps />} />
          <Route path="/privacy" element={<PrivatePolicy />} />
          <Route path="/whitepaper" element={<WhitePaper />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
