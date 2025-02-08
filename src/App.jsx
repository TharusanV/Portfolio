import { BrowserRouter, Routes, Route } from "react-router-dom";

import { BootUp, Terminal, Computer} from "./components";

function App() {

  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<BootUp />} />
          <Route path="/terminal" element={<Terminal />} />
          <Route path="/computer" element={<Computer />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
