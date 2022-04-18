import React, { useEffect } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Header from './components/shared/Header/Header';
import Schedule from './components/pages/Schedule/Schedule';
import Films from './components/pages/Films';
import Hall from './components/pages/Hall';
import About from './components/pages/About/About';
import Comments from './components/pages/Comments';
import Film from './components/pages/Film';
import Footer from './components/shared/Footer/Footer';
import GoTopArrow from './components/shared/GoTopArrow';

function App() {


  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Schedule />} />
          <Route index path="/films" element={<Films />} />
          <Route index path="/films/:filmId" element={<Film />} />
          <Route index path="/hall/:filmId" element={<Hall />} />{/*+search params*/}
          <Route index path="/about" element={<About />} />
          <Route index path="/comments" element={<Comments />} />
          <Route path="*" element={<div>Not Found</div>} />
        </Routes>
      </main>
      <GoTopArrow />
      <Footer />

    </BrowserRouter>
  );
}

export default App;
