import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import About from "../../components/About/About";
import Skills from "../../components/Skills/Skills";
import Projects from "../../components/portfolio/Projects";
import Testmonial from "../../components/Testmonial/Testmonial";
import Form from "../../components/Form/Form";
import Footer from "../../components/Footer/Footer";

function Home() {
  return (
    <div id="home">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Testmonial />
      <Form />
      <Footer />
    </div>
  );
}

export default Home;
