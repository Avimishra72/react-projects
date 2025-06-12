import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../public/punChat.svg";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (!userName || !password) {
      setError("Please enter both userName and password");
      return;
    }

    if (userName === "admin" && password === "admin@123") {
      setError("");
      navigate("/");
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <>
      <section className="w-screen h-screen flex items-center justify-center bg-[#0D1526]">
        <div className="w-[30%] bg-[#fff] px-8 py-6 rounded-sm">
          <div className="w-[40px] h-[40px] bg-[#0D1526] flex items-center justify-center rounded-sm mb-6">
            <div className="w-[30px] h-[30px]">
              <img src={logo} alt="" />
            </div>
          </div>
          <h2 className="font-bold text-xl text-[#000] mb-1">Login</h2>
          <h3 className="font-medium text-sm text-[#000] mb-6">
            Let's do some Punchat
          </h3>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label className="font-medium text-sm text-[#000]">
                User Name:
              </label>
              <input
                className="w-full h-[40px] px-2 border mt-2"
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                required
              />
            </div>
            <div className="mb-8">
              <label className="font-medium text-sm text-[#000] mb-2">
                Password:
              </label>
              <input
                className="w-full h-[40px] px-2 border mt-2"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {error && (
              <p className="font-bold text-sm text-[red] mb-3">{error}</p>
            )}
            <button className="button" type="submit">
              Login
            </button>
          </form>

          <h3 className="font-medium text-sm text-[#000] mt-6">
            Don't have PunChat Account ?{" "}
            <a
              onClick={() => navigate("/signUp")}
              className="text-blue-600 cursor-pointer"
            >
              Register Now.
            </a>
          </h3>
        </div>
      </section>
    </>
  );
};

export default Login;
