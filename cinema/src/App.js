import React, { useEffect } from 'react';
import Header from './components/Header';
import './styles/App.scss';

function App() {
  useEffect(() => {
    window.onscroll = () => {
      const header = document.querySelector('header');
      header.classList.toggle('sticky', window.scrollY > 0);
    }
  }, []);

  return (
    <>
      <Header />
      <div className="test">
        Hello
      </div>
    </>
  );
}

export default App;
