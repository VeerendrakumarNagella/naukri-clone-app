import { useState } from "react";
import jobserch from "../images/serch2.jpg";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [userDetails, setuserDetails] = useState({
    fullName: "",
    email: "",
    password: "",
    mobile: "",
    resume: "",
  });
  const [userDetailsError, setuserDetailsError] = useState({
    fullNameError: "",
    emailError: "",
    passwordError: "",
    mobileError: "",
    resumeError: "",
  });
  const { fullName, email, password, mobile, resume } = userDetails;
  const { fullNameError, emailError, passwordError, mobileError, resumeError } =
    userDetailsError;

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setuserDetails({ ...userDetails, [name]: value });

    if (name === "fullName") {
      if (!value) {
        setuserDetailsError({ ...userDetailsError, fullNameError: "Required" });
      } else if (value.length >= 30) {
        setuserDetailsError({
          ...userDetailsError,
          fullNameError: "FullName should not exceed 30 characters",
        });
      } else {
        setuserDetailsError({ ...userDetailsError, fullNameError: "" });
      }
    } else if (name === "email") {
      if (!value) {
        setuserDetailsError({ ...userDetailsError, emailError: "Required" });
      } else if (value.length >= 30) {
        setuserDetailsError({
          ...userDetailsError,
          emailError: "Email should not exceed 30 characters",
        });
      } else {
        setuserDetailsError({ ...userDetailsError, emailError: "" });
      }
    } else if (name === "password") {
      if (!value) {
        setuserDetailsError({ ...userDetailsError, passwordError: "Required" });
      } else if (value.length >= 20) {
        setuserDetailsError({
          ...userDetailsError,
          passwordError: "Password should not exceed 20 characters",
        });
      } else {
        setuserDetailsError({ ...userDetailsError, passwordError: "" });
      }
    } else if (name === "mobile") {
      if (!value) {
        setuserDetailsError({ ...userDetailsError, mobileError: "Required" });
      } else if (value.length > 13) {
        setuserDetailsError({
          ...userDetailsError,
          mobileError: "Mobile should not exceed 13 characters",
        });
      } else {
        setuserDetailsError({ ...userDetailsError, mobileError: "" });
      }
    } else if (name === "resume") {
      if (!value) {
        setuserDetailsError({ ...userDetailsError, resumeError: "Required" });
      } else {
        setuserDetailsError({ ...userDetailsError, resumeError: "" });
      }
    } else {
      setuserDetailsError({
        fullNameError: "",
        emailError: "",
        passwordError: "",
        mobileError: "",
        resumeError: "",
      });
    }
  };

  const handleSubmit = () => {
    if (fullName && email && password && mobile && resume) {
      window.localStorage.setItem("userName", email);
      window.localStorage.setItem("password", password);
      navigate("/login");
    } else {
      alert("Please give all the values");
    }
  };

  return (
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
          <div className="form-element">
            <label>Full name</label>
            <input
              type="text"
              placeholder="what is your name?"
              name="fullName"
              value={fullName}
              onChange={handleChange}
            />
            {fullNameError && <p className="errorText">{fullNameError}</p>}
          </div>
          <div className="form-element">
            <label>Email ID</label>
            <input
              type="email"
              placeholder="Tell us your Email ID"
              name="email"
              value={email}
              onChange={handleChange}
            />
            {emailError && <p className="errorText">{emailError}</p>}
          </div>
          <div className="form-element">
            <label>Password</label>
            <input
              type="password"
              placeholder="Create a password for your account"
              name="password"
              value={password}
              onChange={handleChange}
            />
            {passwordError && <p className="errorText">{passwordError}</p>}
          </div>
          <div className="form-element">
            <label>Mobile Number</label>
            <input
              type="tel"
              placeholder="MobileNumber"
              name="mobile"
              value={mobile}
              onChange={handleChange}
            />
            {mobileError && <p className="errorText">{mobileError}</p>}
          </div>
          <div className="form-element">
            <label>Work status</label>
            <div className="work-status">
              <div className="work-status-1">
                <h4>I'm experinced</h4>
                <p>i have work experince (excluding internships)</p>
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
          </div>
          <div className="form-element">
            <label>Resume</label>
            <input
              type="file"
              placeholder="UploadResume"
              name="resume"
              value={resume}
              onChange={handleChange}
            />
            {resumeError && <p className="errorText">{resumeError}</p>}
          </div>
          <div
            className="form-element"
            style={{
              display: "flex",
              alignItems: "center",
              margin: "10px 0 20px 0",
            }}
          >
            <input type="checkbox" required />
            <label>Send me important updates on WhatsApp</label>
          </div>

          <button
            disabled={
              !fullName ||
              !email ||
              !password ||
              !mobile ||
              !resume ||
              fullNameError ||
              emailError ||
              passwordError ||
              mobileError ||
              resumeError
                ? true
                : false
            }
            onClick={handleSubmit}
          >
            Register now
          </button>
        </form>
      </section>
    </div>
  );
};

export default Register;
