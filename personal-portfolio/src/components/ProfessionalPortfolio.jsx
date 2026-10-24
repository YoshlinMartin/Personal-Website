import useScrollReveal from "../hooks/useScrollReveal";

function ProfessionalPortfolio() {
  // Activates the scroll reveal animations
  useScrollReveal();

  return (
    <div className="professional-page">

      {/* ========================================
          HERO
      ======================================== */}
      <section className="pro-hero">

        <div className="pro-hero-content">

          <h1 className="hero-item hero-delay-2">
            Hi, I'm <span>Yoshlin Martin.</span>
          </h1>
          
          <p className="eyebrow hero-item hero-delay-1">
            FULL STACK, APPLICATION & UI/UX DEVELOPER
          </p>
          <h2 className="hero-item hero-delay-3">
            I turn ideas into reality.
          </h2>

          <p className="hero-description hero-item hero-delay-4">
            I am a full-stack developer with a passion for building modern web
            and mobile applications with intuitive user experiences,
            practical functionality and thoughtful design.
          </p>

          <div className="hero-buttons hero-item hero-delay-5">

            <a
              href="#projects"
              className="button primary-button"
            >
              View My Work
            </a>

            

          </div>

        </div>


        {/* Developer Card */}
        <div className="developer-card developer-card-animation">

          <div className="developer-avatar">
            YM
          </div>

          <h3>Yoshlin Martin</h3>

          <p>Software & Application Developer</p>

          <div className="availability">
            <span className="status-dot"></span>
            Open to opportunities
          </div>

        </div>

      </section>



      {/* ========================================
          ABOUT
      ======================================== */}
      <section
        className="section"
        id="about"
      >

        <div className="section-heading reveal">

          <p>01 / ABOUT</p>

          <h1>About Me</h1>

        </div>


        <div className="about-grid reveal">

          <div className="about-main">

            <p>
              I am a developer with a strong interest in full-stack
              development, mobile applications and creating software
              that provides meaningful solutions to real-world
              problems.
            </p>

            <p>
              My experience has allowed me to work with multiple
              technologies while developing my skills in programming,
              UI/UX design, database development and software
              architecture.
            </p>

          </div>


          <div className="about-stat">

            <strong>Degree</strong>

            <span>
              Bachelor of Computer and Information Sciences in Application Development
            </span>

            <strong>Matric</strong>

            <span>
              Matric Certificate
            </span>

          </div>

        </div>

      </section>



      {/* ========================================
          SKILLS
      ======================================== */}
      <section className="section">

        <div className="section-heading reveal">

          <p>02 / SKILLS</p>

          <h2>Technical Skills</h2>

        </div>


        <div className="skill-groups">

          {/* FRONTEND */}
          <div className="skill-card reveal delay-1">

            <h3>Frontend</h3>

            <div className="skill-tags">
              <span>React</span>
              <span>JavaScript</span>
              <span>HTML</span>
              <span>CSS</span>
              <span>UI/UX</span>
            </div>

          </div>


          {/* BACKEND */}
          <div className="skill-card reveal delay-2">

            <h3>Backend</h3>

            <div className="skill-tags">
              <span>C#</span>
              <span>ASP.NET</span>
              <span>REST APIs</span>
              <span>SQL</span>
            </div>

          </div>


          {/* MOBILE */}
          <div className="skill-card reveal delay-3">

            <h3>Mobile</h3>

            <div className="skill-tags">
              <span>Kotlin</span>
              <span>Android Studio</span>
              <span>Firebase</span>
              <span>Room DB</span>
            </div>

          </div>


          {/* DEVELOPMENT TOOLS */}
          <div className="skill-card reveal delay-4">

            <h3>Tools</h3>

            <div className="skill-tags">
              <span>Git</span>
              <span>GitHub</span>
              <span>Visual Studio</span>
              <span>VS Code</span>
            </div>

          </div>

        </div>

      </section>



      {/* ========================================
          PROJECTS
      ======================================== */}
      <section
        className="section"
        id="projects"
      >

        <div className="section-heading reveal">

          <p>03 / PROJECTS</p>

          <h2>Featured Projects</h2>

        </div>


        <div className="project-grid">

          {/* PROJECT 1 */}
          <article className="project-card reveal delay-1">

            <div className="project-number">
              01
            </div>


            <div>

              <p className="project-type">
                ANDROID APPLICATION
              </p>

              <h3>
                Pocket Mechanic
              </h3>

              <p>
                An educational automotive application designed to help
                users understand dashboard warning lights, perform basic
                vehicle maintenance and identify common mechanical sounds.
              </p>


              <div className="project-tech">

                <span>Kotlin</span>
                <span>Android Studio</span>
                <span>Firebase</span>
                <span>ViewBinding</span>

              </div>

            </div>


            <a
              href="https://github.com/YoshlinMartin/PocketMeCANic"
              target="_blank"
              rel="noreferrer"
              className="project-link"
            >
              View Project →
            </a>

          </article>



          {/* PROJECT 2 */}
          <article className="project-card reveal delay-2">

            <div className="project-number">
              02
            </div>


            <div>

              <p className="project-type">
                WEB APPLICATION
              </p>

              <h3>
                Farming App
              </h3>

              <p>
                A web application designed as a centralised telemetry
                gateway for monitoring and managing distributed IoT
                sensor networks.
              </p>


              <div className="project-tech">

                <span>C#</span>
                <span>ASP.NET</span>
                <span>MVC</span>
                <span>HTML</span>
                <span>CSS</span>

              </div>

            </div>


            <a
              href="https://github.com/YoshlinMartin"
              target="_blank"
              rel="noreferrer"
              className="project-link"
            >
              View Project →
            </a>

          </article>



          {/* PROJECT 3 */}
          <article className="project-card reveal delay-3">

            <div className="project-number">
              03
            </div>


            <div>

              <p className="project-type">
                REACT WEB APPLICATION
              </p>

              <h3>
                Personal Portfolio
              </h3>

              <p>
                A responsive React portfolio featuring two distinct
                experiences: a professional portfolio for showcasing
                development work and a more creative personal portfolio.
              </p>


              <div className="project-tech">

                <span>React</span>
                <span>JavaScript</span>
                <span>CSS</span>
                <span>Responsive Design</span>

              </div>

            </div>


            <a
              href="https://github.com/YoshlinMartin"
              target="_blank"
              rel="noreferrer"
              className="project-link"
            >
              View Project →
            </a>




          </article>

          {/* PROJECT 4 */}
          <article className="project-card reveal delay-4">

            <div className="project-number">
              04
            </div>


            <div>

              <p className="project-type">
                REACT WEB APPLICATION
              </p>

              <h4>
                More projects available on my GitHub profile
              </h4>

              <p>
                View the rest of my projects on my GitHub profile, which includes a variety of web and mobile applications, as well as other development work.
              </p>
              </div>


            <a
              href="https://github.com/YoshlinMartin"
              target="_blank"
              rel="noreferrer"
              className="project-link"
            >
              View the rest of my projects →
            </a>
            </article>

        </div>

      </section>



      {/* ========================================
          EXPERIENCE
      ======================================== */}
      <section className="section">

        <div className="section-heading reveal">

          <p>04 / EXPERIENCE</p>

          <h2>Experience</h2>

        </div>


        <div className="timeline">

          {/* WORK EXPERIENCE */}
          <div className="timeline-item reveal delay-1">

            <div className="timeline-date">
              EXPERIENCE
            </div>


            <div>

              <h3>
                Apple Product Specialist
              </h3>

              <p className="company">
                iStore
              </p>

              <p>
                Worked directly with customers to understand their
                requirements and recommend appropriate technology
                solutions while developing strong communication,
                troubleshooting and customer service skills.
              </p>

            </div>

          </div>



          {/* UNIVERSITY */}
          <div className="timeline-item reveal delay-2">

            <div className="timeline-date">
              EDUCATION
            </div>


            <div>

              <h3>
                Computer and Information Sciences
              </h3>

              <p className="company">
                Bachelor's Degree in Application Development
              </p>

              <p>
                Completed a predominantly practical degree focused on
                mobile, web and software development while gaining
                experience in programming, databases, UI/UX design,
                application architecture and collaborative development.
              </p>

            </div>

          </div>

        </div>

      </section>



      {/* ========================================
          CONTACT
      ======================================== */}
      <section className="contact-section reveal">

        <p className="eyebrow">
          LET'S BUILD SOMETHING
        </p>


        <h2>
          Interested in working together?
        </h2>


        <p>
          I'm always interested in opportunities that allow me to
          learn, solve problems and build meaningful software.
        </p>


        <div className="contact-buttons">

          <a
            href="mailto:yoshlinquanmartin@email.com"
            className="button primary-button"
          >
            Email Me
          </a>


          <a
            href="https://www.linkedin.com/in/yoshlin-martin"
            target="_blank"
            rel="noreferrer"
            className="button secondary-button"
          >
            LinkedIn
          </a>


          <a
            href="https://github.com/YoshlinMartin"
            target="_blank"
            rel="noreferrer"
            className="button secondary-button"
          >
            GitHub
          </a>

        </div>

      </section>

    </div>
  );
}

export default ProfessionalPortfolio;