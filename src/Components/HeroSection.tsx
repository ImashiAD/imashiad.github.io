import My3DSceneNew from "./My3DSceneNew";

const HeroSection = () => {
  return (
    <>
      <My3DSceneNew />
      <div className="hero-section">
        <div className="content">
          <h1 className="big-text">
            Hi there, I'm Imashi <span className="jap-text">イマジ</span>
          </h1>
          <p>
            A UI/UX Designer crafting functional, human-centered interfaces for
            complex systems. I transform technical requirements into intuitive
            design — because good UI shouldn't need a manual.
          </p>
          <div className="bottom-row">
            <div className="glass-content glass-content-inline">
              <a className="glass-container button">
                <div className="glass-filter"></div>
                <div className="glass-overlay"></div>
                <div className="glass-specular"></div>
                <div className="glass-content glass-content-item">
                  <span className="btn-text">Get in Touch</span>
                </div>
              </a>
            </div>
            <div className="open-container">
              <span className="open-dot"></span>

              <span className="open">Open to New Opportunities</span>
            </div>
          </div>
        </div>
        <div className="starry-wrapper">
          <div className="window">
            <div className="sky-container">
              <div className="sky">
                <div className="stars"></div>
                <div className="stars2"></div>
                <div className="stars3"></div>
                <div className="comet"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
