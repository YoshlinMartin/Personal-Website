import { useState } from "react";

import ModeToggle from "./components/ModeToggle";
import ProfessionalPortfolio from "./components/ProfessionalPortfolio";
import PersonalPortfolio from "./components/PersonalPortfolio";

function App() {

  // Professional is the default page
  const [mode, setMode] = useState("professional");


  // Changes the portfolio mode
  const changeMode = (newMode) => {

    setMode(newMode);

    // Move the visitor back to the top when changing modes
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };


  return (
    <div className={`site-shell ${mode}`}>

      {/* TOP NAVIGATION */}
      <header className="topbar">

        <a href="#" className="brand">
          YM<span>.</span>
        </a>

        <ModeToggle
          mode={mode}
          onModeChange={changeMode}
        />

      </header>


      {/* PORTFOLIO CONTENT */}
      <main className="page-container">

        {mode === "professional" ? (
          <ProfessionalPortfolio />
        ) : (
          <PersonalPortfolio />
        )}

      </main>


      {/* BOTTOM SWITCH */}
      <footer className="mode-footer">

        {mode === "professional" ? (

          <div className="footer-message">
            <p>
              There's more to me than code and qualifications.
            </p>

            <h2>
              Meet the person behind the developer.
            </h2>
          </div>

        ) : (

          <div className="footer-message">
            <p>
              Okay, enough messing around.
            </p>

            <h2>
              Looking for the professional version?
            </h2>
          </div>

        )}


        <ModeToggle
          mode={mode}
          onModeChange={changeMode}
        />


        <p className="copyright">
          © {new Date().getFullYear()} Built with passion.
          Fuelled by ambition.
        </p>

      </footer>

    </div>
  );
}

export default App;