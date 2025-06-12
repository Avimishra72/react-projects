// src/components/Signup.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../public/punChat.svg";

const Signup = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profilePic, setProfilePic] = useState(null);
  const [preview, setPreview] = useState(null);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    setProfilePic(file);

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSignup = (e) => {
    e.preventDefault();

    if (!userName || !email || !password || !profilePic) {
      setError("All fields are required!");
      return;
    }

    console.log({
      userName,
      email,
      password,
      profilePic,
    });

    setError("");
    navigate("/login");
  };

  return (
    <>
      <section className="w-screen h-screen flex items-center justify-center bg-[#0D1526]">
        <div className="w-[430px] bg-[#fff] px-8 py-6 rounded-sm">
          <div className="w-[40px] h-[40px] bg-[#0D1526] flex items-center justify-center rounded-sm mb-6">
            <div className="w-[30px] h-[30px]">
              <img src={logo} alt="" />
            </div>
          </div>
          <h2 className="font-bold text-xl text-[#000] mb-1">Sign Up</h2>
          <h3 className="font-medium text-sm text-[#000] mb-6">
            Let's do some Punchat
          </h3>
          <form onSubmit={handleSignup}>
            <div className="mb-4">
              <label className="font-medium text-sm text-[#000]">
                Username:
              </label>
              <input
                className="w-full h-[40px] px-2 border mt-2"
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label className="font-medium text-sm text-[#000]">Email:</label>
              <input
                className="w-full h-[40px] px-2 border mt-2"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label className="font-medium text-sm text-[#000]">
                Password:
              </label>
              <input
                className="w-full h-[40px] px-2 border mt-2"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label className="font-medium text-sm text-[#000]">
                Profile Picture:
              </label>
              <input
                className="w-full h-[40px] px-2 border mt-2"
                type="file"
                accept="image/*"
                onChange={handleProfilePicChange}
              />
            </div>

            {preview && (
              <div>
                <img
                  src={preview}
                  alt="Preview"
                  style={{ width: "100px", borderRadius: "50%" }}
                />
              </div>
            )}

            {error && <p className="error">{error}</p>}

            <button type="submit">Sign Up</button>
          </form>

          <h3 className="font-medium text-sm text-[#000] mt-6">
            Already have PunChat Account?{" "}
            <a
              onClick={() => navigate("/login")}
              className="text-blue-600 cursor-pointer"
            >
              Login.
            </a>
          </h3>
        </div>
      </section>
    </>
  );
};

export default Signup;
