import HeroSection from "./HeroSection";

const Home = () => {
  return (
    <>
      <HeroSection />
      <section id="projects" className="projects">
        <div className="work-header-container">
          <div className="section-subheader-container">
            <hr />
            <h5>Projects</h5>
          </div>
          <h1 className="section-header-container">Discover My Work</h1>
        </div>

        <div className="grid">
          <a className="project eloc">
            <div className="project-brief">
              <div className="project-title">Eloc-Web</div>
              <p className="project-desc">
                A web application designed to visualize elephant location data
                collected via the Eloc-node devices — which detect elephant
                rumbles using embedded ML models.
              </p>
            </div>
            <div className="project-img-container"></div>
          </a>
          <a className="project boc">
            <div className="project-brief">
              <div className="project-title">BOC Mobile app</div>
              <p className="project-desc">
                A redesign for the BOC mobile app with improved UI/UX.
              </p>
            </div>
            <div className="project-img-container"></div>
          </a>
        </div>
      </section>
    </>
  );
};

export default Home;
