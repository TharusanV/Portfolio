import { BrowserRouter } from "react-router-dom";

import { About, Experience, Hero, Navbar, Tech, Projects} from "./components";

function App() {

  return (
    <BrowserRouter>
      <div>
        <div>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Projects />
      </div>
    </BrowserRouter>
  )
}

export default App
