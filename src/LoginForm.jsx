import React from 'react';
import './login.css'

class LoginForm extends React.Component {
  register = () => {
    const x = document.getElementById("login");
    const y = document.getElementById("register");
    const z = document.getElementById("btn");
    const a = document.getElementById("log");
    const b = document.getElementById("reg");
    const w = document.getElementById("other");
  
    x.style.left = "-400px";
    y.style.left = "50px";
    z.style.left = "110px";
    w.style.visibility = "hidden";
    b.style.color = "#fff";
    a.style.color = "#000";
  }
  
  login = () => {
    const x = document.getElementById("login");
    const y = document.getElementById("register");
    const z = document.getElementById("btn");
    const a = document.getElementById("log");
    const b = document.getElementById("reg");
    const w = document.getElementById("other");

    x.style.left = "50px";
    y.style.left = "450px";
    z.style.left = "0px";
    w.style.visibility = "visible";
    a.style.color = "#fff";
    b.style.color = "#000";
  }

  // CheckBox Function
  goFurther = () => {
    const btnSubmit = document.getElementById('btnSubmit');
    if (document.getElementById("chkAgree").checked === true) {
      btnSubmit.style.background = 'linear-gradient(to right, #FA4B37, #DF2771)';
    } else {
      btnSubmit.style.background = 'lightgray';
    }
  }

  render() {
    return (
      <div className="form-box">
        <div className="button-box">
          <div id="btn"></div>
          <button type="button" className="toggle-btn" id="log" onClick={this.login} style={{ color: '#fff' }}>Log In</button>
          <button type="button" className="toggle-btn" id="reg" onClick={this.register}>Register</button>
        </div>

        {/* Login Form */}
        <form id="login" className="input-group" action="index.html">
          <div className="inp">
            <img src="src/images/icon/user.png" alt="User" />
            <input type="text" id="email" className="input-field" placeholder="Username or Phone Number" style={{ width: '88%', border: 'none' }} required="required" />
          </div>
          <div className="inp">
            <img src="src/images/icon/password.png" alt="Password" />
            <input type="password" id="password" className="input-field" placeholder="Password" style={{ width: '88%', border: 'none' }} required="required" />
          </div>
          <input type="checkbox" className="check-box" />
          <label htmlFor="chkAgree">Remember Password</label>
          <button type="submit" className="submit-btn">Log In</button>
        </form>

        {/* Registration Form */}
        <form id="register" className="input-group">
          <input type="text" className="input-field" placeholder="Full Name" required="required" />
          <input type="email" className="input-field" placeholder="Email Address" required="required" />
          <input type="password" className="input-field" placeholder="Create Password" name="psame" required="required" />
          <input type="password" className="input-field" placeholder="Confirm Password" name="psame" required="required" />
          <div>
            <input type="checkbox" className="check-box" id="chkAgree" onClick={this.goFurther} />
            <label htmlFor="chkAgree">I agree to the Terms & Conditions</label>
          </div>
          <button type="submit" id="btnSubmit" className="submit-btn reg-btn">Register</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
