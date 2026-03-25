import React from "react";
import logo from "./logo.svg";

function App() {
  return (
    <main className="stage">
      <a
        href="https://github.com/slidebolt"
        className="github-link-fixed"
        target="_blank"
        rel="noopener noreferrer"
      >
        github.com/slidebolt
      </a>

      <div className="corner-brand-fixed">
        <div className="corner-logo-wrap">
          <img src={logo} alt="SlideBolt logo" />
        </div>
        <div className="corner-text">SLIDEBOLT</div>
      </div>

      <div className="scroll-container">
        <section className="hero">
          <div className="brand-center" aria-label="SlideBolt">
            <div className="logo-wrap">
              <img className="logo" src={logo} alt="SlideBolt logo" />
            </div>
            <div className="text-wrap" aria-hidden="true">
              <div className="text">SLIDEBOLT</div>
            </div>
          </div>
        </section>

        <section className="content-section">
          <div className="text-block">
            <h2>About SlideBolt</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
            <p>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum. Curabitur pretium
              tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis
              et commodo pharetra, est eros bibendum elit, nec luctus magna
              felis sollicitudin mauris. Integer in mauris eu nibh euismod
              gravida.
            </p>
            <p>
              Duis ac tellus et risus vulputate vehicula. Donec lobortis risus
              a elit. Etiam tempor. Ut ullamcorper, ligula eu tempor congue,
              eros est euismod turpis, id tincidunt sapien risus a quam.
              Maecenas fermentum consequat mi. Donec fermentum. Pellentesque
              malesuada nulla a mi. Duis sapien sem, aliquet nec, commodo eget,
              consequat quis, neque. Aliquam faucibus, elit ut dictum aliquet,
              felis nisl adipiscing sapien, sed pretium diam eros tempus enim.
            </p>
          </div>
        </section>

        <footer className="footer">
          <nav className="footer-nav">
            <a href="/terms.html">Terms of Service</a>
            <a href="/privacy.html">Privacy Policy</a>
          </nav>
        </footer>
      </div>
    </main>
  );
}

export default App;