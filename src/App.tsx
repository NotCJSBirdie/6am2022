import "./App.css";
import Brand from "./components/Brand";
import Intro from "./components/Intro";
import WidePic from "./components/WidePic";
import Expertise from "./components/Expertise";
import DualA from "./components/DualA";
import Murano from "./components/Murano";
import Crystal from "./components/Crystal";
import Works from "./components/Works";
import DualB from "./components/DualB";
import Studio from "./components/Studio";
import DualC from "./components/DualC";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

function App() {
  return (
    <div id="main" className="overflow-hidden">
      <Brand />
      <Intro />
      <WidePic />
      <Expertise />
      <DualA />
      <Murano />
      <Crystal />
      <Works />
      <DualB />
      <Studio />
      <DualC />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
