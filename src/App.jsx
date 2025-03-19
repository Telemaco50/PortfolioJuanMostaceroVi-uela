import { Route, BrowserRouter as Router, Routes, useNavigate } from "react-router-dom";

import { Footer, Navbar } from "./components";
import { About, Contact, Home,Projects } from "./pages";

const RedirectToHTML = () => {
  window.location.href = "/prjects.html"; // Asegúrate de tener este archivo en la carpeta public
  return null;
};

const App = () => {
  return (
    <main className='bg-slate-300/20 bg-black '>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route
            path='/*'
            element={
              <>
                <Routes>
                  <Route path='/about' element={<About />} />
                  <Route path='/projects' element={<Projects />}  />
                  <Route path='/contact' element={<Contact />} />
                </Routes>
                <Footer />
              </>
            }
          />
        </Routes>
      </Router>
    </main>
  );
};

export default App;
