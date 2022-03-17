import "./app.scss";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";

function App() {
  return (
    <div className="app">
      <div className="section">
        <Intro/>
        <Portfolio/>
      </div>
    </div>
  );
}

export default App;
