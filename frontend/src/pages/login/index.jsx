import { useNavigate } from "react-router-dom";
import { useState } from "react";
import API from "../../api/axios.js";
import "../../App.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const LoginHandler = async (event) => {
    event.preventDefault();

    if (!email || !password) {
      alert("Please fill all input fields");
      return;
    }

    try {
      setLoading(true);

      const response = await API.post("/auth/login", {
        email,
        password,
      });

      const { token, user } = response.data;

      // JWT token save karna
      localStorage.setItem("token", token);

      alert(`Welcome back, ${user.name}!`);
navigate("/dashboard");
      
      
    } catch (error) {
      alert(
        error.response?.data?.message ||
          "Login failed. Please try again."
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
            <span className="hero-tag">WELCOME BACK</span>
            <h1>
              Build something
              <br />
              remarkable.
            </h1>
            <p>
              Login to access your workspace
              and continue where you left off.
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
            <h2>Login</h2>
            <p>Welcome back! Enter your details below.</p>
          </div>

          <form className="login-form" onSubmit={LoginHandler}>
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              id="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <div className="password-label">
              <label htmlFor="password">Password</label>
              <a href="#forgot-password">Forgot password?</a>
            </div>

            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <label className="remember-option">
              <input type="checkbox" />
              <span>Remember me</span>
            </label>

            <button
              type="submit"
              className="login-button"
              disabled={loading}
            >
              {loading ? "Signing in..." : "Sign in"}
              {!loading && <span> →</span>}
            </button>
          </form>

          <div className="form-divider">
            <span></span>
            <p>OR CONTINUE WITH</p>
            <span></span>
          </div>

          <button type="button" className="google-button">
            <strong>G</strong> Continue with Google
          </button>

          <p className="signup-text">
            Don't have an account? <a href="/signup">Sign up</a>
          </p>

          <p className="terms-text">
            By continuing, you agree to our Terms of Service
            and Privacy Policy.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
