import "./app.scss";
import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";

function App() {
  return (
    <div className="app">
      <Topbar/>
      <div className="section">
        <Intro/>
        <Portfolio/>
      </div>
    </div>
  );
}

export default App;