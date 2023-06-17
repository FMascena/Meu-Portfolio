import {
    Routes as WrapperRoutes,
    Route,
    BrowserRouter,
  } from "react-router-dom";
  import About from "./pages/About";
  import Contact from "./pages/Contact";
  import Home from "./pages/Home";
  import Projects from "./pages/Projects";
  import Skills from "./pages/Skills";

  export default function Routes() {
    return (
      <BrowserRouter>
        <WrapperRoutes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projetos" element={<Projects />} />
          <Route path="/contato" element={<Contact />} />
        </WrapperRoutes>
      </BrowserRouter>
    );
  }
  