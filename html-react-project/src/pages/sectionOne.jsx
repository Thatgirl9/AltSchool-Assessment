// import sectionOneAssets from "../assets/Section 1 Assets";
import Group2 from "../assets/Section 1 Assets/Group 2.png";
import Group3 from "../assets/Section 1 Assets/Group 3.png";
import Vector3 from "../assets/Section 1 Assets/Vector 3.png";
import Vector4 from "../assets/Section 1 Assets/Vector (4).png";
import logo from "../assets/Section 1 Assets/Logo.png";
// import Vector2 from "../assets/Section 1 Assets/Vector 2.png";
// import "./App.css";

function SectionOne() {
  return (
    <>
      <section className="section-one">
        <header>
          <img className="logo" src={logo} />
          <nav>
            <ul>
              <li>
                <a href="#my-urls">
                  <span className="text-blue">My URLS</span>
                </a>
              </li>

              <a href="#features">
                Features
                <img src={Vector4} className="arrow-icon" />
              </a>
              <li>
                <a href="#pricing">Pricing</a>
              </li>
              <li>
                <a href="#analytics">Analytics</a>
              </li>
              <li>
                <a href="#faqs">FAQs</a>
              </li>
            </ul>
          </nav>
          <div className="header-buttons">
            <a className="button-a">Log in</a>
            <button className="header-button">Try for free</button>
          </div>
        </header>
        <div className="hero-div">
          <h2 className="hero-h2">
            Optimize Your Online Experience with Our
            <br />
            Advanced
            <span className="text-blue">URL Shortening </span>
            Solution
          </h2>
          <img src={Vector3} className="blue-mark" />
          <p className="hero-p">
            Personalize your shortened URLs to align with your brand identity.
            Utilize custom slugs,
            <br />
            branded links, and domain customization options to reinforce your
            brand presence and
            <br />
            enhance user engagement.
          </p>
          <div className="hero-button">
            <button className="hero-button1">Sign Up</button>
            <button className="hero-button2">Learn More</button>
          </div>
          <img src={Group2} className="img-div" />
          <img src={Group3} className="img-circle" />
        </div>
        {/* Ending of the Hero Div */}
        <div className="hero-footer">
          <div>
            <h2 className="hero-footer-h2">
              One Stop.
              <br />
              Four <span className="text-blue">Possibilities.</span>
            </h2>
          </div>
          <div>
            <h3 className="hero-footer-h3">3M</h3>
            <p className="hero-footer-p">Active users</p>
          </div>
          <div>
            <h3 className="hero-footer-h3">60M</h3>
            <p className="hero-footer-p">
              Links &amp; QR
              <br />
              codes created
            </p>
          </div>
          <div>
            <h3 className="hero-footer-h3">1B</h3>
            <p className="hero-footer-p">
              Clicked &amp; Scanned
              <br />
              connections
            </p>
          </div>
          <div>
            <h3 className="hero-footer-h3">300k</h3>
            <p className="hero-footer-p">App Integrations</p>
          </div>
        </div>
        {/* Ending of Hero-footer div */}
      </section>
      {/* Ending of section one */}
    </>
  );
}

export default SectionOne;
