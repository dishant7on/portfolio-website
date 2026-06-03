import Navbar from "./components/Navbar";
import "./App.css";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import profileImg from "./assets/profile.jpg";
import Footer from "./components/Footer";
function App() {

  return (
    <div>
      <Navbar />

      <section id="home" className="hero">
        <img src={profileImg} alt="Dishant Chaudhari" className="profile-img" />
  <h1>Dishant Chaudhari</h1>

  <h2>Computer Science Student</h2>

  <p>
    Building modern web applications using React,
    Node.js and MongoDB.
  </p>

  <div className="hero-buttons">
  <button>Contact Me</button>
  <button className="secondary-btn">View Projects</button>
  <button className="secondary-btn">
  GitHub
</button>
</div>
</section>
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;