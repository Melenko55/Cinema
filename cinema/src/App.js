import React, { useEffect } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Footer from './components/Footer';
import Header from './components/Header/Header';
import Films from './pages/Films';
import Schedule from './pages/Schedule';
import Film from './pages/Film';
import Hall from './pages/Hall';
import Comments from './pages/Comments';
import About from './pages/About';

import './styles/App.scss';
function App() {
  useEffect(() => {
    window.onscroll = () => {
      const header = document.querySelector('header');
      header.classList.toggle('sticky', window.scrollY > 0);
    }
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route index path="/" element={<Schedule />} />
          <Route index path="/films" element={<Films />} />
          <Route index path="/films/:filmId" element={<Film />} />
          <Route index path="/hall/:filmId" element={<Hall />} />
          <Route index path="/about" element={<About />} />
          <Route index path="/comments" element={<Comments />} />
          <Route path="*" element={<div>Not Found</div>} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
