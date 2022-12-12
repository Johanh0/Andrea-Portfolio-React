import { useState } from "react"
import Nav from "./components/Nav";
import Header from "./components/Header";
import LogosCompanies from "./components/LogosCompanies";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import EmailMe from "./components/Resume";
import Footer from "./components/Footer";

function App() {



  return (
    <div className="App">
      <Nav></Nav>

      <Header></Header>

      <LogosCompanies></LogosCompanies>

      <Projects></Projects>

      <About></About>

      <Contact></Contact>

      <EmailMe></EmailMe>

      <Footer></Footer>
    </div>
  )
}

export default App
