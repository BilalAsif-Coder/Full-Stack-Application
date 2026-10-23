
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../api/axios.js";
import "../../App.css";

function Signup() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confimPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const SignupHandler = async (event) => {
    event.preventDefault();

    if (!fullName || !email || !password || !confimPassword) {
      alert("Please fill all the fields");
      return;
    }

    if (password !== confimPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      setLoading(true);

      const response = await API.post("/auth/signup", {
        name: fullName,
        email,
        password,
      });
      

      alert(response.data.message);
      navigate("/");
      
      setFullName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      
    } catch (error) {
      alert(
        error.response?.data?.message ||
          "Signup failed. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <div className="login-left">
          <h2 className="brand">
            NEXORA<span>.</span>
          </h2>

          <div className="login-hero">
            <span className="hero-tag">JOIN NEXORA</span>

            <h1>
              Build something
              <br />
              remarkable.
            </h1>

            <p>
              Create your account and get started with a
              smarter way to manage your work, tasks and goals.
            </p>

            <div className="hero-graphic">
              <div className="graphic-circle circle-one"></div>
              <div className="graphic-circle circle-two"></div>

              <div className="graphic-card">
                <span className="graphic-dot"></span>
                <span className="graphic-line"></span>
                <span className="graphic-line short"></span>

                <div className="graphic-bars">
                  <i></i>
                  <i></i>
                  <i></i>
                  <i></i>
                  <i></i>
                </div>
              </div>
            </div>
          </div>

          <p className="left-footer">
            © 2026 Nexora. All rights reserved.
          </p>
        </div>

        <div className="login-right">
          <div className="form-heading">
            <h2>Create an account</h2>
            <p>
              Get started with Nexora and bring your ideas to life.
            </p>
          </div>

          <form className="login-form" onSubmit={SignupHandler}>
            <label htmlFor="name">Full name</label>
            <input
              type="text"
              id="name"
              placeholder="Enter your full name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />

            <label htmlFor="signup-email">Email address</label>
            <input
              type="email"
              id="signup-email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <label htmlFor="signup-password">Password</label>
            <input
              type="password"
              id="signup-password"
              placeholder="Create a strong password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <label htmlFor="confirm-password">
              Confirm password
            </label>
            <input
              type="password"
              id="confirm-password"
              placeholder="Confirm your password"
              value={confimPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />

            <button
              type="submit"
              className="login-button"
              disabled={loading}
            >
              {loading ? "Creating account..." : "Create account"}
              {!loading && <span> →</span>}
            </button>
          </form>

          <div className="form-divider">
            <span></span>
            <p>OR SIGN UP WITH</p>
            <span></span>
          </div>

          <button type="button" className="google-button">
            <strong>G</strong> Continue with Google
          </button>

          <p className="signup-text">
            Already have an account?{" "}
            <a href="/">Sign in</a>
          </p>

          <p className="terms-text">
            By creating an account, you agree to our Terms of
            Service and Privacy Policy.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
