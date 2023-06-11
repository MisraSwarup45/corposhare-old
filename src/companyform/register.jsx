import { useState } from "react";
import { useNavigate } from "react-router";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { FaQuoteLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Cookies from "js-cookie";

export default function Register() {
  const [show, setshow] = useState(false);
  const navigate = useNavigate();
  const [info, setinfo] = useState({
    email: "swarup@gmail.com",
    username: "swarup",
    password: "7015477816@msMS",
    re_password: "7015477816@msMS",
  });

  const memberinfo = (e) => {
    setinfo((info) => ({
      ...info,
      [e.target.name]: e.target.value,
    }));
  };

  const handleChange = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "http://3.143.239.250/api/api/register/",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: info.email,
            username: info.username,
            password: info.password,
            re_password: info.re_password,
          }),
        }
      );

      const data = await response.json();
      if (data.token) {
        Cookies.set("token", data.token); // Store the token as a cookie
        console.log(data.token);
        navigate("/");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Navbar />
      <div className="main_login_page">
        <div className="login_wrapper">
          <div className="login_art_">
            <div className="icon">
              <div className="circle"></div>
            </div>
            <div className="text">
              <h2>Let us help you run your freelance business.</h2>
              <p>Join us here for opportunities</p>
            </div>
            <div className="card">
              <FaQuoteLeft className="quotes_icon" />
              <p>
                I'm impressed with the results I've seen since starting to use
                this product. I began receiving clients and projects in the
                first week.
              </p>
            </div>
          </div>

          <div className="login_details_">
            <form onSubmit={handleChange} className="form_details">
              <div className="input_wrapper">
                <label htmlFor="username">Company Name</label>
                <br />
                <input
                  title="Username of the Person"
                  placeholder="Company Name"
                  className="input_box"
                  type="username"
                  name="username"
                  id="username"
                  required
                  onChange={memberinfo}
                />
              </div>
              <div className="input_wrapper">
                <label htmlFor="email">Email</label>
                <br />
                <input
                  title="Email of the Person"
                  placeholder="info@example.com"
                  className="input_box"
                  type="email"
                  name="email"
                  id="email"
                  required
                  onChange={memberinfo}
                />
              </div>
              <div className="input_wrapper">
                <label htmlFor="pass">Password</label>
                <br />
                <div className="fake_box">
                  <input
                    className="input_inside"
                    placeholder="password"
                    type={show ? "text" : "password"}
                    required
                    name="password"
                    title="Password"
                    id="pass"
                    onChange={memberinfo}
                  />
                  <div
                    className="text"
                    onClick={(e) => {
                      setshow((cur) => !cur);
                    }}
                  >
                    {show ? <AiFillEyeInvisible /> : <AiFillEye />}
                  </div>
                </div>
              </div>
              <div className="input_wrapper">
                <label htmlFor="pass">Re-Password</label>
                <br />
                <div className="fake_box">
                  <input
                    className="input_inside"
                    placeholder="Rewrite Password"
                    type={show ? "text" : "password"}
                    required
                    name="re_password"
                    title="Re-Password of the Person"
                    id="re_password"
                    onChange={memberinfo}
                  />
                  <div
                    className="text"
                    onClick={(e) => {
                      setshow((cur) => !cur);
                    }}
                  >
                    {show ? <AiFillEyeInvisible /> : <AiFillEye />}
                  </div>
                </div>
              </div>
              <input
                className="submit"
                title="Submit Button"
                type="submit"
                value="Sign Up"
              />
            </form>
            <p className="alternate_acc_route">
              Already have an account?{" "}
              <Link className="link" to="/">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
