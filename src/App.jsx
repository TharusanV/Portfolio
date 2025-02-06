import { BrowserRouter } from "react-router-dom";

import { About, Experience, Hero, Navbar, Tech, Projects} from "./components";

function App() {

  return (
    <BrowserRouter>
      <div>
        <div>
          
          <Hero />
        </div>
        <About />
      </div>
    </BrowserRouter>
  )
}

export default App
