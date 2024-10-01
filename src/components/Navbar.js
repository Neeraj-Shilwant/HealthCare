import React from 'react'

const Navbar = () => {
  return (
    <section className="home-hero">
    <header className="home-header17">
            <header data-thq="thq-navbar" className="home-navbar">
              <div className="home-left1">
                <h1>Health Care</h1>
                <nav className="home-links1">
                  <a href="#" className="home-link10">Features</a>
                  <a href="#" className="home-link11">How it works</a>
                  <a href="#" className="home-link12">Prices</a>
                  <a href="#" className="home-link13">Contact</a>
                </nav>
              </div>
              <div data-thq="thq-navbar-btn-group" className="home-right1">
                
                <a href="#book" className="home-book1 button button-main">
                  
                  <span className="home-text17">Book an appointment</span>
                </a>
              </div>
              <div data-thq="thq-burger-menu" className="home-burger-menu">
                <svg viewBox="0 0 1024 1024" className="home-icon2">
                  <path
                    d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"
                  ></path>
                </svg>
              </div>
              <div data-thq="thq-mobile-menu" className="home-mobile-menu">
                <div
                  data-thq="thq-mobile-menu-nav"
                  data-role="Nav"
                  className="home-nav1"
                >
                  <div className="home-container2">
                    <img
                      alt="image"
                      src="public/Branding/logo-1500h.png"
                      className="home-image18"
                    />
                    <div data-thq="thq-close-menu" className="home-menu-close">
                      <svg viewBox="0 0 1024 1024" className="home-icon4">
                        <path
                          d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <nav
                    data-thq="thq-mobile-menu-nav-links"
                    data-role="Nav"
                    className="home-nav2"
                  >
                    <span className="home-text18">Features</span>
                    <span className="home-text19">How it works</span>
                    <span className="home-text20">Prices</span>
                    <span className="home-text21">Contact</span>
                    <a href="#book" className="home-book2 button button-main">
                      <img
                        alt="image"
                        src="public/Icons/calendar.svg"
                        className="home-image19"
                      />
                      <span className="home-text22">Book an appointment</span>
                    </a>
                  </nav>
                </div>
              </div>
            </header>
          </header>
          </section>
  )
}

export default Navbar