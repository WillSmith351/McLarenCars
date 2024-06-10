import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Entreprise from './pages/Entreprise';
import Collection from './pages/Collection';
import Course from './pages/Course';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/entreprise" element={<Entreprise />} />
          <Route path="/collection" element={<Collection />} />
          {/* <Route path="/course" element={<Course />} /> */}
        </Routes>
      </main>
    </div>
  );
}

export default App;
