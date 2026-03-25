import logo from "../image.png";

function App() {
  return (
    <main className="stage">
      <section className="brand" aria-label="SlideBolt">
        <div className="logo-wrap">
          <img className="logo" src={logo} alt="SlideBolt logo" />
        </div>
        <div className="text-wrap" aria-hidden="true">
          <div className="text">SLIDEBOLT</div>
        </div>
      </section>
    </main>
  );
}

export default App;