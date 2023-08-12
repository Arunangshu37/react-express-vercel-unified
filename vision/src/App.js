import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home.js';
import Layout from './components/Layout.js';
import NoPage from './components/NoPage';
import Contact from './components/Contact';

function App() {
  return (
   <BrowserRouter>
     <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        <Route path="/" element={<Layout />} />
      </Routes>
   </BrowserRouter>
  );
}

export default App;
