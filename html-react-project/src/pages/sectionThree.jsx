import Group2One from "../assets/Section 3 Assets/Group 2 (1).png";
import Group2Two from "../assets/Section 3 Assets/Group 2 (2).png";
import Group3One from "../assets/Section 3 Assets/Group 3 (1).png";
import Group3Two from "../assets/Section 3 Assets/Group 3 (2).png";
import MagicWand from "../assets/Section 3 Assets/magic wand.png";
import Plus from "../assets/Section 3 Assets/plus.png";
import Vector5 from "../assets/Section 3 Assets/Vector (5).png";
import Vector6 from "../assets/Section 3 Assets/Vector (6).png";
import Line70 from "../assets/Section 2 Assets/Line 70.png";

function SectionThree() {
  return (
    <>
      {/* Beginning of Section Three */}
      <section className="section-three">
        <div className="section3-div1">
          <div>
            <img src={Group3One} align="left" className="bg-pattern1" />
          </div>
          <div className="div2-div3" id="my-urls">
            <div className="div1-div2i">
              <button className="section3-button1">Paste URL here...</button>
              <div className="flex-button">
                <button className="section3-button2">
                  Choose Domain
                  <img src={Vector5} className="arrow-icon1" />
                </button>
                <button className="section3-button3">Type Alias here</button>
              </div>
              <button className="section3-button4" type="button">
                Trim URL
                <img src={MagicWand} className="magic-wand" />
              </button>
              <p className="text-blue-p">
                By clicking TrimURL, I agree to the
                <strong>Terms of Service,</strong>
                <br />
                <strong>Privacy Policy</strong> and Use of Cookies.
              </p>
            </div>
            {/*End of div1-div2i*/}
          </div>
          {/*End of div2-div3*/}
          <div className="img-div2">
            <img src={Group2One} align="bottom-right" className="bg-pattern2" />
          </div>
          {/*ending of img-div*/}
        </div>
        {/*Ending of Section3-div1*/}
        <div className="section3-div2">
          {/* Img */}
          <img src={Group3Two} className="side-pattern1" />
          <div className="accordion-div" id="faqs">
            <div className="div1-div">
              <img src={Line70} className="line-vector" />
              <h2>FAQs</h2>
            </div>
            <div className="accordion-div-i">
              <div className="div-ii">
                <p className="accordion-h4">How does URL shortening work?</p>
                <p className="vector-p">
                  <img src={Vector6} className="minus-vector" />
                </p>
              </div>
              <p className="accordion-p">
                URL shortening works by taking a long URL and creating a
                shorter, condensed version that redirects to the
                <br />
                original URL. When a user clicks on the shortened link, they are
                redirected to the intended destination.
              </p>
            </div>
            {/*Ending of accordion-div-i*/}
            <div className="accordion-div-2">
              <p className="accordion-h4">
                Is it necessary to create an account to use the URL shortening
                service?
              </p>
              <p className="flex-li">
                <img src={Plus} className="plus-vector" />
              </p>
            </div>
            {/*Ending of accordion-div-2*/}
            <div className="accordion-div-2">
              <p className="accordion-h4">
                Are the shortened links permanent? Will they expire?
              </p>
              <p>
                <img src={Plus} className="plus-vector" />
              </p>
            </div>
            {/*Ending of accordion-div-2*/}
            <div className="accordion-div-2">
              <p className="accordion-h4">
                Are there any limitations on the number of URLs I can shorten?
              </p>
              <p>
                <img src={Plus} className="plus-vector" />
              </p>
            </div>
            {/*Ending of accordion-div-2*/}
            <div className="accordion-div-2">
              <p className="accordion-h4">
                Can I customize the shortened URLs to reflect my brand or
                content?
              </p>
              <p>
                <img src={Plus} className="plus-vector" />
              </p>
            </div>
            {/*Ending of accordion-div-2*/}
            <div className="accordion-div-2">
              <p className="accordion-h4">
                Can I track the performance of my shortened URLs?
              </p>
              <p>
                <img src={Plus} className="plus-vector" />
              </p>
            </div>
            {/*Ending of accordion-div-2*/}
            <div className="accordion-div-2">
              <p className="accordion-h4">
                How secure is the URL shortening service? Are the shortened
                links protected
                <br />
                against spam or malicious activity?
              </p>
              <p>
                <img src={Plus} className="plus-vector" />
              </p>
            </div>
            {/*Ending of accordion-div-2*/}
            <div className="accordion-div-2">
              <p className="accordion-h4">
                What is a QR code and what can it do?
              </p>
              <p>
                <img src={Plus} className="plus-vector" />
              </p>
            </div>
            {/*Ending of accordion-div-2*/}
            <div className="accordion-div-2">
              <p className="accordion-h4">
                Is there an API available for integrating the URL shortening
                service into my own
                <br />
                applications or websites?
              </p>
              <p>
                <img src={Plus} className="plus-vector" />
              </p>
            </div>
            {/*Ending of accordion-div-2*/}
          </div>
          {/*Ending of accordion div*/}
          <div className="pattern-div">
            <img src={Group2Two} className="side-pattern2" />
          </div>
        </div>
        {/*Ending of Section3-div2*/}
      </section>
      {/* Ending of Section Three */}
    </>
  );
}

export default SectionThree;
