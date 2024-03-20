import Contact from "./component/Contact";
import Hero from "./component/Hero";
import Nav from "./component/Nav";
import Project from "./component/Project";
import Skill from "./component/Skilld";
import Work from "./component/Work";

function App() {
  return (
    <div>
      <Nav />
      <Hero />
      <Skill />
      <Work />
      <Project />
      <Contact />
    </div>
  );
}

export default App;
