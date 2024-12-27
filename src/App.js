import './App.css';
import Basic from './Basic';
import Resume from './Resume';
import AboutMe from './AboutMe';
import AnchorLink from 'react-anchor-link-smooth-scroll';

function App() {
  return (
    <>
      {/* Navigation bar */}
      <nav className="basic1">
        <div className="left">
          <img src="images/image1.png" alt="Logo" />
        </div>
        <div className="right">
          <AnchorLink offset={() => 100} href="#home">Home</AnchorLink>
          <AnchorLink offset={() => 100} href="#resume">Portfolio</AnchorLink>
          <AnchorLink offset={() => 100} href="#resume">Resume</AnchorLink>
          <AnchorLink offset={() => 100} href="#aboutme">About Me</AnchorLink>
        </div>
      </nav>

      {/* Sections */}
      <section id="home">
        <Basic />
      </section>

      <section id="resume">
        <Resume />
      </section>

      <section id="aboutme">
        <AboutMe />
      </section>
    </>
  );
}

export default App;
