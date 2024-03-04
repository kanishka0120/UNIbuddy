import React, { useEffect } from 'react';
import './home.css';
import ContactForm from './contactform';
import FeedbackSection from './feedbacksection';
import SideMenu from './sidemenu';
import { useNavigate } from 'react-router-dom';

const useExternalScript = (url) => {
    useEffect(() => {
      const script = document.createElement('script');
      script.src = url;
      script.async = true;
      document.body.appendChild(script);
  
      return () => {
        document.body.removeChild(script);
      };
    }, [url]); // Re-run this hook if the url changes
  };
  
  
function App() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/LoginForm");
    }
    // const sideMenu = (side) => {
    //     const menu = document.getElementById('side-menu');
    //     if (side === 0) {
    //       menu.style.transform = 'translateX(0vh)';
    //       menu.style.position = 'fixed';
    //     } else {
    //       menu.style.transform = 'translateX(-100%)';
    //     }
    //   };
    useExternalScript('https://code.jquery.com/jquery-3.2.1.js');
  useExternalScript('src/script.js'); // Adjust the path to your 
  useEffect(() => {
    // Inline script for scrolling functionality
    $(window).on('scroll', function(){
      if($(window).scrollTop()){
        $('nav').addClass('black');
      } else {
        $('nav').removeClass('black');
      }
    });
  }, []); 
  return (
    <div>
    {/* Navigation Bar */}
    <header id="header">
      <nav>
        <div className="logo">
          <img src="src/web/main_logo.png" alt="logo" />
          
        </div>
        <ul>
          <li>
            <a className="active" href="">
              Home
            </a>
          </li>
          <li>
            <a href="#team_section">Team</a>
          </li>
          <li>
            <a href="#services_section">Services</a>
          </li>
          <li>
            <a href="#contactus_section">Contact</a>
          </li>
        </ul>
        <a className="get-started" onClick={handleClick}>
          Get Started
        </a>
        {/* <img
          src="src/images/icon/menu.png"
          className="menu"
          onClick={() => sideMenu(0)}
          alt="menu"
        /> */}
      </nav>
      <div className="head-container">
        <div className="quote">
          <p>
            The beautiful thing about learning is that nobody can take it away
            from you
          </p>
          <h5>
            Education is the process of facilitating learning, or the acquisition
            of knowledge, skills, values, beliefs, and habits. Educational methods
            include teaching, training, storytelling, discussion and directed
            research!
          </h5>
          <div className="play">
            <img src="src/web/play.png" alt="play" />
            <span>
              <a
                href="https://www.youtube.com/watch?v=KFyrgDO1WXk"
                target="_blank"
              >
                Watch Now
              </a>
            </span>
          </div>
        </div>
        <div className="svg-image">
          <img src="src/web/student_standing.png" alt="svg" />
        </div>
      </div>
      {/* <div className="side-menu" id="side-menu">
        <div className="close" onClick={() => sideMenu(1)}>
          <img src="src/images/icon/close.png" alt="" />
        </div>
        <div class="user">
                  <img src="images/creator/roshan.jpeg" alt="Username"/>
                  <p>roshank9419</p>
              </div>
        <ul>
          <li>
            <a href="#about_section">About</a>
          </li>
          <li>
            <a href="#portfolio_section">Portfolio</a>
          </li>
          <li>
            <a href="#team_section">Team</a>
          </li>
          <li>
            <a href="#services_section">Services</a>
          </li>
          <li>
            <a href="#contactus_section">Contact</a>
          </li>
          <li>
            <a href="#feedBACK">Feedback</a>
          </li>
        </ul>
      </div> */}

    </header>
    {/* Some Popular Subjects */}
    <div className="title">
      <span>One click Search:</span>
    </div>
    <br />
    <br />
    <div className="course">
      <center>
        <div className="cbox">
          <div className="det">
            <a href="" target="_blank">
              <img src="src/web/research.png" />
              Research
            </a>
          </div>
          <div className="det">
            <a href="https://youtube.com">
              <img src="src/web/tutorial.png" />
              Tutorial Videos
            </a>
          </div>
          <div className="det">
            <a href="subjects/jee.html#sample_papers">
              <img src="src/web/placements.png" />
              Placements
            </a>
          </div>
        </div>
      </center>
      <div className="cbox">

        {/* ABOUT */}
        <div className="diffSection" id="about_section">
          <center>
            <p style={{ fontSize: 50, padding: 100 }}>About</p>
          </center>
          <div className="about-content">
            <div className="side-image">
              <img className="sideImage" src="src/web/about.jpg" />
            </div>
            <div className="side-text">
              <h2>What you think about us ?</h2>
              <p>
                Education is the process of facilitating learning, or the
                acquisition of knowledge, skills, values, beliefs, and habits.
                Educational methods include teaching, training, storytelling,
                discussion and directed research.
                <br /> Educational website can include websites that have games,
                videos or topic related resources that act as tools to enhance
                learning and supplement classroom teaching. These websites help
                make the process of learning entertaining and attractive to the
                student, especially in today's age. <br />
                Using HTML(HyperText Markup Language), CSS(Cascading Style Sheet),
                JavaScript, we can make learning more easier and in a interesting
                way.
              </p>
            </div>
          </div>
        </div>
        {/* TEAM */}
        <div className="diffSection" id="team_section">
          <center>
            <p style={{ fontSize: 50, paddingTop: 100, paddingBottom: 60 }}>
              We're the Creators
            </p>
          </center>
          <div className="totalcard">
            <div className="card">
              <center>
                <img src="src/web/INSIYA PIC2.jpg" />
              </center>
              <center>
                <div className="card-title">Insiya Vakharia</div>
                <div id="detail">
                  <p>
                    “ You can teach a student a lesson for a day; but if you can
                    teach him to learn by creating curiosity, he will continue the
                    learning process as long as he lives “
                  </p>
                  <div className="duty" />
                  <a
                    href="https://www.linkedin.com/in/insiya-vakharia-4a6796260/"
                    target="_blank"
                  >
                    <button className="btn-roshan">Follow +</button>
                  </a>
                </div>
              </center>
            </div>
            <div className="card">
              <center>
                <img src="" />
              </center>
              <center>
                <div className="card-title">Kanishka Sharma</div>
                <div id="detail">
                  <p>
                    “ Real education should consist of drawing the goodness and
                    the best out of our own students. What better books can there
                    be than the book of humanity “
                  </p>
                  <div className="duty" />
                  <a
                    href="https://www.linkedin.com/in/kanishka-sharma-235397245/"
                    target="_blank"
                  >
                    <button className="btn-akhil">Follow +</button>
                  </a>
                </div>
              </center>
            </div>
            <div className="card">
              <center>
                <img src="src/web/aryan.jpg" />
              </center>
              <center>
                <div className="card-title">Aryan Singh</div>
                <div id="detail">
                  <p>
                    “ You can teach a student a lesson for a day; but if you can
                    teach him to learn by creating curiosity, he will continue the
                    learning process as long as he lives “
                  </p>
                  <div className="duty" />
                  <a
                    href="https://www.linkedin.com/in/aryan-singh-394b4a249"
                    target="_blank"
                  >
                    <button className="btn-roshan">Follow +</button>
                  </a>
                </div>
              </center>
            </div>
            <div className="card">
              <center>
                <img src="src/images/creator/roshan1.jpeg" />
              </center>
              <center>
                <div className="card-title">Akshata</div>
                <div id="detail">
                  <p>
                    “ You can teach a student a lesson for a day; but if you can
                    teach him to learn by creating curiosity, he will continue the
                    learning process as long as he lives “
                  </p>
                  <div className="duty" />
                  <a
                    href="https://www.linkedin.com/in/roshan-kumar-a18b76179/"
                    target="_blank"
                  >
                    <button className="btn-roshan">Follow +</button>
                  </a>
                </div>
              </center>
            </div>
          </div>
        </div>
        {/* SERVICES */}
        <div className="service-swipe">
          <div className="diffSection" id="services_section">
            <center>
              <p
                style={{
                  fontSize: 50,
                  padding: 100,
                  paddingBottom: 40,
                  color: "#fff"
                }}
              >
                Services
              </p>
            </center>
          </div>
          <a href="subjects/computer_courses.html">
            <div className="s-card">
              <img src="src/images/icon/computer-courses.png" />
              <p>Tutorial Videos Courses</p>
            </div>
          </a>
          <a href="subjects/jee.html">
            <div className="s-card">
              <img src="src/images/icon/brainbooster.png" />
              <p>Placements</p>
            </div>
          </a>
          <a href="subjects/jee.html#sample_papers">
            <div className="s-card">
              <img src="src/images/icon/papers.jpg" />
              <p>Research Opportunities</p>
            </div>
          </a>
        </div>
        {/* CONTACT US */}
        <ContactForm></ContactForm>
        {/* FEEDBACK */}
       <FeedbackSection></FeedbackSection>
        {/* Sliding Information */}
        <marquee
          style={{
            background: "linear-gradient(to right, #FA4B37, #DF2771)",
            marginTop: 50
          }}
          direction="left"
          onmouseover="this.stop()"
          onmouseout="this.start()"
          scrollamount={20}
        >
          <div className="marqu">
            “Education is the passport to the future, for tomorrow belongs to
            those who prepare for it today.” “Your attitude, not your aptitude,
            will determine your altitude.” “If you think education is expensive,
            try ignorance.” “The only person who is educated is the one who has
            learned how to learn …and change.”
          </div>
        </marquee>
        {/* FOOTER */}
        <footer>
          <div className="footer-container">
            <div className="left-col">
              <img src="src/web/main_logo.png" style={{ width: 80 }} />
              <div className="logo" />
              <div className="social-media">
                <a href="#">
                  <img src="src/web/fb.png" />
                </a>
                <a href="#">
                  <img src="src/web/insta.png" />
                </a>
                <a href="#">
                  <img src="src/web/twitter.png" />
                </a>
                <a href="#">
                  <img src="src/web/ytube.png" />
                </a>
                <a href="#">
                  <img src="src/web/linkedin.png" />
                </a>
              </div>
              <br />
              <br />
              <p className="rights-text">
                Copyright © 2024 Created By Insiya Vakharia, Kanishka Sharma,
                Aryan Singh, Akshata All Rights Reserved.
              </p>
              <br />
              <p>
                <img src="src/web/location.png" />
                BMSCE College of Engineering <br />
                Bangalore, Karnataka-560078
              </p>
              <br />
              <p>
                <img src="src/web/phone.png" /> +91-9632135253
                <br />
                <img src="src/web/mail.png" />
                &nbsp; @gmail.com
              </p>
            </div>
            <div className="right-col">
              <h1 style={{ color: "#fff" }}>Our Newsletter</h1>
              <div className="border" />
              <br />
              <p>Enter Your Email to get our News and updates.</p>
              <form className="newsletter-form">
                <input
                  className="txtb"
                  type="email"
                  placeholder="Enter Your Email"
                />
                <input className="btn" type="submit" defaultValue="Submit" />
              </form>
            </div>
          </div>
        </footer>
        
      </div>
    
    </div>
    </div>
  );
}

export default App;
