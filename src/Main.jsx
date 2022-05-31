import "./main.scss";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import TopbarMain from "./components/topbar/TopbarMain";

function Main() {
  return (
    <div>
      <TopbarMain/>
      <div className="main">
        
        <div className="section">
          <Intro/>
          <Portfolio/>
        </div>
      </div>
    </div>
  );
}

export default Main;
