import { Route, Routes } from "react-router-dom";

import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Project from "./pages/Project/Project";

function App() {
    return (
        <Routes>
            <Route path="/" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projets" element={<Project />} />
        </Routes>
    );
}

export default App;
