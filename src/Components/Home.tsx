import My3DScene from "./My3DScene";

const Home = () => {
  return (
    <>
      <div className="container">
        <div className="hero-container">
          <div className="grid page-hero">
            <div className="page-hero-content">
              <div className="page-hero-text">
                <h1>Hi, I'm Imashi.</h1>
                <p>
                  A UI/UX Designer crafting functional, human-centered
                  interfaces for complex systems.
                </p>
              </div>
              <My3DScene />
              {/* <div className="page-hero-img"></div> */}
            </div>
          </div>
        </div>
        <section className="big-text-container">
          <h1 className="big-text">
            I transform technical requirements into intuitive design — because
            good UI shouldn't need a manual
          </h1>
        </section>
        <section id="projects" className="my-projects">
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
        <section id="contact" className="contact">
          <div className="work-header-container">
            <div className="section-subheader-container">
              <hr />
              <h5>Contact</h5>
            </div>
            <h1 className="section-header-container">Get in Touch</h1>
            <h6>
              Email me at:{" "}
              <a href="mailto:imashi921a@gmail.com">imashi921a[at]gmail.com</a>
            </h6>
          </div>
        </section>
        <section className="footer"></section>
      </div>
    </>
  );
};

export default Home;
