import "./App.css";
import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Iraq from "./The_Countries/Iraq";
import America from "./The_Countries/America";
import London from "./The_Countries/London";
import Dubai from "./The_Countries/Dubai";
import Home from "./The_Countries/Homepage";

function App() {
  return (
    <div className="App">
      <header className="App-heade">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/iraq" element={<Iraq />} />
          <Route path="/america" element={<America />} />{" "}
          <Route path="/london" element={<London />} />{" "}
          <Route path="/dubai" element={<Dubai />} />{" "}
        </Routes>
        
      </header>{" "}
    </div>
  );
}

export default App;
