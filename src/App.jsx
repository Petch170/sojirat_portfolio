import Contact from "./component/Contact";
import Hero from "./component/Hero";
import Nav from "./component/Nav";
import Project from "./component/Project";
import Work from "./component/Work";

function App() {
  return (
    <div>
      <Nav />
      <Hero />
      <Work/> 
      <Project/>
      <Contact/>
    </div>
  );
}

export default App;
