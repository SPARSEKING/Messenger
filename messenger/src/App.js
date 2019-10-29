import React from 'react';
import './App.css';

const App=() =>{
  return (
    <div className='app-wrapper'>
      <header className='header'>
        <img src='https://i.pinimg.com/736x/33/b8/69/33b869f90619e81763dbf1fccc896d8d--lion-logo-modern-logo.jpg'/>
      </header>
      <nav className='navbar'>
        <div>
          <a>Profile</a>
        </div>
        <div>
          <a>Messages</a>
        </div>
        <div>
          <a>News</a>
        </div>
        <div>
          <a>Music</a>
        </div>
      </nav>
      <div className='content'>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT26up8_h0gXF8Ucn9x008hFhNJ8bYRCU-zNTWkjVcZNbh3WM7vIQ&s'/>
      </div>
    </div>
  );
}

export default App;
