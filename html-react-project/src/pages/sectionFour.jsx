import FrameOne from "../assets/Section 4 Assets/Frame 1000001666.png";
import GroupTwoThree from "../assets/Section 4 Assets/Group 2 (3).png";
import GroupTwoFour from "../assets/Section 4 Assets/Group 2 (4).png";
import GroupThreeThree from "../assets/Section 4 Assets/Group 3 (3).png";
import GroupThreeFour from "../assets/Section 4 Assets/Group 3 (4).png";
import LogoOne from "../assets/Section 4 Assets/Logo (1).png";
import Social from "../assets/Section 4 Assets/socials.png";

function SectionFour() {
  return (
    <>
      {/* Beginning of Section Four */}
      <section className="section-four">
        <div className="footer-div1">
          <div className="footer-bg-pattern1">
            <img src={GroupThreeThree} className="bg-pattern3" />
          </div>
          <div className="f-div">
            <h3 className="f-div-h3">Revolutionizing Link Optimization</h3>
            <button className="f-div-button">Get Started</button>
          </div>
          <div className="footer-bg-pattern2">
            <img src={GroupTwoThree} className="bg-pattern4" />
          </div>
        </div>
        {/* Ending of Footer-div1 */}
        <div className="footer-div2">
          <div className="footer-bg-pattern3">
            <img src={GroupThreeFour} className="bg-pattern5" />
          </div>
          <div className="footer-div-card">
            <div className="div-socials">
              <p>
                <img src={LogoOne} className="footer-logo" />
              </p>
              <p>
                <img src={Social} className="social-logo" />
              </p>
            </div>
            <div className="footer-grid">
              <div>
                <h4>Why Scissor ?</h4>
                <p className="footer-grid-p">
                  Scissor 101
                  <br />
                  Integrations &amp; API
                  <br />
                  Pricing
                </p>
              </div>
              <div>
                <h4>Solutions</h4>
                <p className="footer-grid-p">
                  {" "}
                  Social Media
                  <br /> Digital Marketing
                  <br /> Customer Service
                  <br /> For Developers{" "}
                </p>
              </div>
              <div>
                <p />
                <h4>Products</h4>
                <p
                  className="
        footer-grid-p"
                >
                  Link Management
                  <br />
                  QR Codes
                  <br />
                  Link-in-bio
                </p>
              </div>
              <div>
                <h4>Company</h4>
                <p
                  className="
        footer-grid-p"
                >
                  About Scissor
                  <br />
                  Careers
                  <br />
                  Partners
                  <br />
                  Press
                  <br />
                  Contact
                  <br />
                  Reviews
                </p>
              </div>
              <div>
                <h4>Resources</h4>
                <p
                  className="
        footer-grid-p"
                >
                  Blog
                  <br />
                  Resource Library
                  <br />
                  Developers
                  <br />
                  App Connectors
                  <br />
                  Support
                  <br />
                  Trust Center
                  <br />
                  Browser Extension
                  <br />
                  Mobile App
                </p>
              </div>
              <div id="features">
                <h4>Features</h4>
                <p
                  className="
        footer-grid-p"
                >
                  Branded Links
                  <br />
                  Mobile Links
                  <br />
                  Campaign
                  <br />
                  Management &amp;
                  <br />
                  Analytics
                  <br />
                  QR Code generation
                </p>
              </div>
              <div>
                <h4>Legal</h4>
                <p
                  className="
        footer-grid-p"
                >
                  Privacy Policy
                  <br />
                  Cookie Policy
                  <br />
                  Terms of Service
                  <br />
                  Acceptable Use Policy
                  <br />
                  Code of Conduct
                </p>
              </div>
            </div>
          </div>
          {/* Ending of footer-div-card */}
          <div className="footer-bg-pattern4">
            <img src={GroupTwoFour} className="bg-pattern6" />
          </div>
        </div>
        {/* Ending of Footer-div2 */}
        <div className="footer-details-div">
          <img src={FrameOne} className="footer-details" />
        </div>
      </section>
      {/* Ending of sectionFour */}
    </>
  );
}

export default SectionFour;
