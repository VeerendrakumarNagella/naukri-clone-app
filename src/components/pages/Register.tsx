import React from "react";
import nakuri from "../images/nakuri.jpg";
import jobserch from "../images/serch2.jpg";

const Register = () => {
  return (
    <div>
      <div className="container">
        <section className="section-1">
          <img src={jobserch} alt="job-serch" style={{ borderRadius: "50%" }} />
          <h3>On registering, you can</h3>
          <ul>
            <li>Build your profile and let recruiters find you</li>
            <li>Get job postings delivered right to your email</li>
            <li>Find a job and grow your career</li>
          </ul>
        </section>
        <section className="section-2">
          <h2>Find a job & grow your career</h2>
          <form>
            <label>Full name</label>
            <br />
            <input type="text" placeholder="what is your name?" required />
            <br />
            <br />
            <label>Email ID</label>
            <br />
            <input type="email" placeholder="Tell us your Email ID" required />
            <br />
            <br />
            <label>Password</label>
            <br />
            <input
              type="password"
              placeholder="Create a password for your account"
              required
            />
            <br />
            <br />
            <label>Mobilenumber</label>
            <br />
            <input type="tel" placeholder="MobileNumber" required />
            <br />
            <br />
            <label>Work status</label>
            <br />
            <div className="work-status">
              <br />{" "}
              <div className="work-status-1">
                <h4>I'm experinced</h4>
                <p>
                  i have work experince
                  <br />
                  (excluding internships)
                </p>
              </div>
              &nbsp;&nbsp;
              <div className="work-status-1">
                <h4>I'm a fresher</h4>
                <p>
                  i am a student / Haven't worked <br />
                  after graduation
                </p>
              </div>
            </div>
            <br />
            <br />
            <label>Resume</label>
            <br />
            <input type="file" placeholder="UploadResume" required />
            <br />
            <br />
            <label>Send me important updates on WhatsApp</label>
            <input type="checkbox" required />
            <br />
            <br />
            <button>Register now</button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Register;
