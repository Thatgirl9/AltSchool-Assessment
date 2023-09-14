import CheckCircleOne from "../assets/Section 2 Assets/check-circle (1).png";
import CheckCircleTwo from "../assets/Section 2 Assets/check-circle.png";
import Group6 from "../assets/Section 2 Assets/Group 6.png";
import Group6One from "../assets/Section 2 Assets/Group 6 (1).png";
import Group6Two from "../assets/Section 2 Assets/Group 6 (2).png";
import Group6Three from "../assets/Section 2 Assets/Group 6 (3).png";
import Line70 from "../assets/Section 2 Assets/Line 70.png";

function SectionTwo() {
  return (
    <>
      {/* Beginning of Section Two */}
      <section className="section-two">
        <div className="section2-div1" id="analytics">
          <div className="div1">
            <div className="div1-div">
              <img src={Line70} className="line-vector" />
              <h3 className="div1-h3">
                Why choose <span className="text-blue">Scissors</span>
              </h3>
            </div>
            {/* div1-div Ending */}
            <p className="div1-p">
              Scissors is the hub of everything that has to do
              <br />
              with your link management. We shorten your URLs,
              <br />
              allow you creating custom ones for your personal,
              <br />
              business, event usage. Our swift QR code
              <br />
              creation, management and usage tracking with
              <br />
              advance analytics for all of these is second to
              <br />
              none.
            </p>
          </div>
          {/* Div1 Ending */}
          <div className="grid-div">
            <div className="grid-div1">
              <img src={Group6} className="grid-logo" />
              <h3 className="grid-h3">URL Shortening</h3>
              <p className="grid-p">
                Scissor allows you to shorten URLs of your
                <br />
                business, events. Shorten your URL at scale,
                <br />
                URL redirects.
              </p>
            </div>
            {/* grid-div1 ending */}
            <div className="grid-div2">
              <img src={Group6One} className="grid-logo" />
              <h3 className="grid-h3">Custom URLs</h3>
              <p className="grid-p">
                With Scissor, you can create custom URLs,
                <br />
                with the length you want! A solution for socials
                <br />
                and businesses.
              </p>
            </div>
            {/* grid-div2 ending */}
            <div className="grid-div3">
              <img src={Group6Two} className="grid-logo" />
              <h3 className="grid-h3">QR Codes</h3>
              <p className="grid-p">
                Generate QR codes to your business, events.
                <br />
                Bring your audience and customers to your
                <br />
                doorstep with this scan and go solution.
              </p>
            </div>
            {/* grid-div3 ending */}
            <div className="grid-div4">
              <img src={Group6Three} className="grid-logo" />
              <h3 className="grid-h3">Data Analytics</h3>
              <p className="grid-p">
                Receive data on the usage of either your
                <br />
                shortened URL, custom URLs or generated QR
                <br />
                codes. Embedded to monitor progress.
              </p>
            </div>
            {/* grid-div4 ending */}
          </div>
          {/* grid-div ending */}
        </div>
        {/*section2-Div1 Ending */}
        <div className="section2-div2">
          <div className="div2-div1">
            <div className="div1-div">
              <img src={Line70} className="line-vector" />
              <h2 className="div2-h2">
                A <span className="text-blue">price perfect</span> for your
                needs.
              </h2>
            </div>
            {/*Ending of div1-div  */}
            <p className="div1-p1">
              From catering for your personal, business, event, socials needs,
              you can be
              <br />
              rest assured we have you in mind in our pricing.
            </p>
          </div>
          {/* Ending of div2-div1 */}
          <div className="div2-div2" id="pricing">
            <div className="div2-div-1">
              <h4 className="div2-h4">Basic</h4>
              <h3 className="div2-h3">Free</h3>
              <p className="div2-p">Free plan for all users</p>
              <div className="check-p-div">
                <div className="check-p">
                  <img src={CheckCircleTwo} className="check-icon" />
                  <p className="div2-p1">Unlimited URL Shortening</p>
                </div>
                <div className="check-p">
                  <img src={CheckCircleTwo} className="check-icon" />
                  <p className="div2-p1">Basic Link Analytics</p>
                </div>
                <div className="check-p">
                  <img src={CheckCircleTwo} className="check-icon" />
                  <p className="div2-p1">Customizable Short Links</p>
                </div>
                <div className="check-p">
                  <img src={CheckCircleTwo} className="check-icon" />
                  <p className="div2-p1">Standard Support</p>
                </div>
                <div className="check-p">
                  <img src={CheckCircleTwo} className="check-icon" />
                  <p className="div2-p1">Ad-supported</p>
                </div>
              </div>
            </div>
            {/* Ending of div2-div-1 */}
            <div className="div2-div-2">
              <h4 className="div2-h4">Professional</h4>
              <h3 className="div2-h3">$15/month</h3>
              <p className="div2-p">Ideal for business creators</p>
              <div className="check-p-div">
                <div className="check-p">
                  <img src={CheckCircleOne} className="check-icon" />
                  <p className="div2-p1">Enhanced Link Analytics</p>
                </div>
                <div className="check-p">
                  <img src={CheckCircleOne} className="check-icon" />
                  <p className="div2-p1">Custom Branded Domains</p>
                </div>
                <div className="check-p">
                  <img src={CheckCircleOne} className="check-icon" />
                  <p className="div2-p1">Advanced Link Customization</p>
                </div>
                <div className="check-p">
                  <img src={CheckCircleOne} className="check-icon" />
                  <p className="div2-p1">Priority Support</p>
                </div>
                <div className="check-p">
                  <img src={CheckCircleOne} className="check-icon" />
                  <p className="div2-p1">Ad-free Experience</p>
                </div>
              </div>
            </div>
            {/* Ending of div2-div-2 */}
            <div className="div2-div-3">
              <h4 className="div2-h4">Teams</h4>
              <h3 className="div2-h3">$25/month</h3>
              <p className="div2-p">Share with up to 10 users</p>
              <div className="check-p-div">
                <div className="check-p">
                  <img src={CheckCircleTwo} className="check-icon" />
                  <p className="div2-p1">Team Collaboration</p>
                </div>
                <div className="check-p">
                  <img src={CheckCircleTwo} className="check-icon" />
                  <p className="div2-p1">User Roles and Permissions</p>
                </div>
                <div className="check-p">
                  <img src={CheckCircleTwo} className="check-icon" />
                  <p className="div2-p1">Enhanced Security</p>
                </div>
                <div className="check-p">
                  <img src={CheckCircleTwo} className="check-icon" />
                  <p className="div2-p1">API Access</p>
                </div>
                <div className="check-p">
                  <img src={CheckCircleTwo} className="check-icon" />
                  <p className="div2-p1">Dedicated Account Manager</p>
                </div>
              </div>
            </div>
            {/*ending of div2-div-3*/}
          </div>
          {/* Ending of div2-div2 */}
          <div className="div2-div2-buttons">
            <button className="div2-button1">Get Custom Pricing</button>
            <button className="div2-button2">Select Pricing</button>
          </div>
        </div>
        {/* section2-div2 Ending */}
      </section>
      {/* Ending of Section Two */}
    </>
  );
}

export default SectionTwo;
