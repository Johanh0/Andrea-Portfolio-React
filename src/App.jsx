import Nav from "./components/Nav";
import Header from "./components/Header";
import LogosCompanies from "./components/LogosCompanies";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import EmailMe from "./components/EmailMe";
import Footer from "./components/Footer";

function App() {

  return (
    <div className="App">
      <Nav></Nav>

      <Header></Header>

      <LogosCompanies></LogosCompanies>

      <Projects></Projects>

      <Contact></Contact>

      <EmailMe></EmailMe>

      <Footer></Footer>
    </div>
  )
}

export default App
