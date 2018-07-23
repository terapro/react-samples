import React from 'react';
import logo from './logo.svg';
import {Link} from 'react-router-dom';

export const Home = () =>
  ( <div className='page'>
      <header>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <nav>
        <Link to="Home">Home</Link>
        <Link to="About">About</Link>
        <Link to="Catalogue">Catalogue</Link>
        <Link to="Contact">Contact</Link>

      </nav>
      <section className='about'>
        <h1>Home page</h1>
      </section>
    </div>
  );

export const About = () =>
  (
    <div className='page'>
      <header>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <nav>
        <Link to="Home">Home</Link>
        <Link to="About">About</Link>
        <Link to="Catalogue">Catalogue</Link>
        <Link to="Contact">Contact</Link>

      </nav>
      <section className='about'>
        <h1>About page</h1>
      </section>
    </div>
  );

export const Catalogue = () =>
  (
    <div className='page'>
      <header>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <nav>
        <Link to="Home">Home</Link>
        <Link to="About">About</Link>
        <Link to="Catalogue">Catalogue</Link>
        <Link to="Contact">Contact</Link>

      </nav>
      <section className='about'>
        <h1>Catalogue page</h1>
      </section>
    </div>
  );

export const Contact = () =>
  (
    <div className='page'>
      <header>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <nav>
        <Link to="Home">Home</Link>
        <Link to="About">About</Link>
        <Link to="Catalogue">Catalogue</Link>
        <Link to="Contact">Contact</Link>

      </nav>
      <section className='about'>
        <h1>Contact page</h1>
      </section>
    </div>
  );

export const Whoops404 =({location}) =>   (
  <div className='page'>
    <header>
      <img src={logo} className="App-logo" alt="logo" />
    </header>
    <nav>
      <Link to="Home">Home</Link>
      <Link to="About">About</Link>
      <Link to="Catalogue">Catalogue</Link>
      <Link to="Contact">Contact</Link>

    </nav>
    <section className='about'>
      <h1>Page is not found</h1>
      <p>You tried to open <span>{location.pathname}</span></p>
    </section>
  </div>
);