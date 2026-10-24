
function PersonalPortfolio() {
  return (
    <div className="personal-page">

      {/* PERSONAL HERO */}
      <section className="personal-hero">

        <div className="floating-shape shape-one"></div>
        <div className="floating-shape shape-two"></div>

        <p className="personal-small-title">
          THE OTHER SIDE OF THE DEVELOPER
        </p>

        <h1>
          Welcome to the fun side !
        </h1>

        <p className="personal-intro">
          Developer by profession. Curious by nature.
        </p>

        <div className="personal-tags">
          <span>💻 Tech</span>
          <span>🎮 Gaming</span>
          <span>📸 Photography</span>
          <span>🚗 Cars</span>
          <span>🎵 Music</span>
          <span>🧠 Learning random things</span>
        </div>

      </section>


      {/* PERSONAL DESCRIPTION */}
      <section className="personal-section">

        <div className="fun-heading">
          <span>01</span>

          <h2>
            So, who am I when I'm not coding?
          </h2>
        </div>

        <div className="personal-about-card">

          <p>
            As much as I enjoy development, there's a lot more to me
            than staring at VS Code until something finally works.
          </p>

          <p>
            I enjoy discovering new technology, working on personal
            projects, gaming, photography, cars and generally figuring
            out how things work.
          </p>

          <p>
            I'm naturally curious, which is probably one of the main
            reasons I became a developer in the first place.
          </p>

        </div>

      </section>


      {/* INTERESTS */}
      <section className="personal-section">

        <div className="fun-heading">
          <span>02</span>
          <h2>Things I'm into</h2>
        </div>

        <div className="interest-grid">

          <div className="interest-card large-card">
            <div className="interest-icon">💻</div>

            <p className="mini-label">
              PROBABLY OBVIOUS
            </p>

            <h3>Technology</h3>

            <p>
              Computers, smartphones, software, new technology and
              taking things apart to understand how they work.
            </p>
          </div>


          <div className="interest-card">
            <div className="interest-icon">🚗</div>

            <h3>Cars</h3>

            <p>
              Engineering, performance cars and everything automotive.
            </p>
          </div>


          <div className="interest-card">
            <div className="interest-icon">🎮</div>

            <h3>Gaming</h3>

            <p>
              A very effective way of turning a five-minute break
              into several hours.
            </p>
          </div>


          <div className="interest-card">
            <div className="interest-icon">📸</div>

            <h3>Photography</h3>

            <p>
              Finding interesting perspectives and capturing moments.
            </p>
          </div>


          <div className="interest-card">
            <div className="interest-icon">🧠</div>

            <h3>Learning</h3>

            <p>
              I have a habit of becoming interested in something and
              then needing to understand absolutely everything about it.
            </p>
          </div>

        </div>

      </section>


      {/* FUN FACTS */}
      <section className="personal-section">

        <div className="fun-heading">
          <span>03</span>
          <h2>Character stats</h2>
        </div>

        <div className="stats-grid">

          <div className="stat-card">
            <span>☕</span>
            <strong>100%</strong>
            <p>Chance I'll say "one more thing" before finishing a project</p>
          </div>

          <div className="stat-card">
            <span>💻</span>
            <strong>∞</strong>
            <p>Chrome tabs currently open</p>
          </div>

          <div className="stat-card">
            <span>🐛</span>
            <strong>99%</strong>
            <p>Chance the bug was caused by one character</p>
          </div>

          <div className="stat-card">
            <span>💡</span>
            <strong>24/7</strong>
            <p>Ideas appearing at inconvenient times</p>
          </div>

        </div>

      </section>


      {/* CURRENTLY */}
      <section className="personal-section">

        <div className="fun-heading">
          <span>04</span>
          <h2>Currently...</h2>
        </div>

        <div className="currently-grid">

          <div>
            <span>🛠️ BUILDING</span>
            <h3>My next project</h3>
            <p>
              Probably something that started with
              "this shouldn't be too difficult."
            </p>
          </div>

          <div>
            <span>📚 LEARNING</span>
            <h3>React</h3>
            <p>
              Building better, faster and more interactive
              web applications.
            </p>
          </div>

          <div>
            <span>🎯 GOAL</span>
            <h3>Keep improving</h3>
            <p>
              Become a stronger developer by building things
              instead of only reading about them.
            </p>
          </div>

        </div>

      </section>


      {/* PERSONAL MESSAGE */}
      <section className="personal-message">

        <div className="message-emoji">
          👋
        </div>

        <h2>
          Thanks for visiting my little corner of the internet.
        </h2>

        <p>
          Hopefully you now know slightly more about me than what
          can fit onto a CV.
        </p>

      </section>

    </div>
  );
}

export default PersonalPortfolio;