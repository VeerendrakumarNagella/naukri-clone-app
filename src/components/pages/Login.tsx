import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import loginpic from "../images/loginpic.png";
import { FC } from "react";

interface LoginProps {
  setAuth: (val: boolean) => void;
}

const Login: FC<LoginProps> = ({ setAuth }) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    if (data.email && data.password) {
      const userName = window.localStorage.getItem("userName");
      const password = window.localStorage.getItem("password");
      if (
        data.email.trim().toLowerCase() === userName?.trim().toLowerCase() &&
        data.password === password
      ) {
        setAuth(true);
        window.localStorage.setItem("auth", "true");
      } else {
        alert("Username or password incorrect");
      }
    } else {
      alert("Provide both values");
    }
  };

  return (
    <div className="loginmain-info">
      <section className="loginleft-info">
        <h1>New to Naukri? </h1>
        <ul>
          <li> One click apply using naukri profile.</li>
          <li> Get relevant job recommendations.</li>
          <li>Showcase profile to top companies and consultants.</li>
          <li>Know application status on applied jobs.</li>
        </ul>
        <div>
          <button>
            <Link to="/register">Register for free</Link>
          </button>
        </div>
        <img src={loginpic} alt="pic" />
      </section>
      <section>
        <form className="fom-info" onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder="Email"
            {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
          />
          <input
            type="passsword"
            placeholder="Password"
            {...register("password", { required: true })}
          />

          <input type="submit" value="Login" />
        </form>
      </section>
    </div>
  );
};
export default Login;
