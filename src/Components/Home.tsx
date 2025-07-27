import HeroSection from "./HeroSection";

const Home = () => {
  return (
    <>
      <div className="container-80 landing">
        <HeroSection />

        <div className="section-title-container">
          <h1 className="section-title">Discover My Work</h1>
        </div>

        <section className="main">
          <ul id="cards">
            <li className="card" id="card-1">
              <div className="card-content">
                <div>
                  <h2>Eloc-Web</h2>
                  <p>
                    A web application designed to visualize elephant location
                    data collected via the Eloc-node devices — which detect
                    elephant rumbles using embedded ML models.
                  </p>
                </div>
                <figure>
                  <img
                    src="https://assets.codepen.io/210284/flower-9.jpg"
                    alt="card-one"
                  />
                </figure>
              </div>
            </li>

            <li className="card" id="card-2">
              <div className="card-content">
                <div>
                  <h2>BOC Mobile app</h2>
                  <p>A redesign for the BOC mobile app with improved UI/UX.</p>
                </div>
                <figure>
                  <img
                    src="https://assets.codepen.io/210284/flower-8.jpg"
                    alt="card two"
                  />
                </figure>
              </div>
            </li>

            <li className="card" id="card-3">
              <div className="card-content">
                <div>
                  <h2>Card Three</h2>
                  <p>
                    This is the content of card three. Lorem ipsum dolor sit
                    amet consectetur adipisicing elit.
                  </p>
                </div>
                <figure>
                  <img
                    src="https://assets.codepen.io/210284/flower-7.jpg"
                    alt="card three"
                  />
                </figure>
              </div>
            </li>

            <li className="card" id="card-4">
              <div className="card-content">
                <div>
                  <h2>Card Four</h2>
                  <p>
                    This is the content of card four. Lorem ipsum dolor sit amet
                    consectetur adipisicing elit.
                  </p>
                </div>
                <figure>
                  <img
                    src="https://assets.codepen.io/210284/flower-6.jpg"
                    alt="card four"
                  />
                </figure>
              </div>
            </li>
          </ul>
        </section>
      </div>
    </>
  );
};

export default Home;
