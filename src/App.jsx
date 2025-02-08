import { HashRouter, Routes, Route } from "react-router-dom";

import { BootUp, Terminal, Computer } from "./components";

function App() {
  return (
    <HashRouter>
      <div>
        <Routes>
          <Route path="/" element={<BootUp />} />
          <Route path="/terminal" element={<Terminal />} />
          <Route path="/computer" element={<Computer />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
