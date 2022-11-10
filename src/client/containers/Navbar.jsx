const Navbar = () => {
  return (
    <nav className="nav" id="navbar">
      <div className="nav-container">
        <a href="/">
          <img className="logo" id="logo" src="header.png" />
        </a>
        <div className="nav-right-container">
          <ul className="nav-links">
            <li>
              <a href="/" className="link-text">About</a>
            </li>
            <li>
              <a href="/docs" className="link-text">Docs</a>
            </li>
            <li>
              <a href="https://github.com/oslabs-beta/LatchQL" target="_blank" className="link-text">
                Github
              </a>
            </li>
            <li>
              <a
                href="https://www.scaryforkids.com/pics/scary-movie.jpg"
                target="_blank"
                className="link-text"
              >
                Blog
              </a>
            </li>
            {/* <li id ="latch">
              <a 
                href="/docs" 
                target="_blank"
            >
            <button2 className="latch-btn2">Get Started</button2>
          </a>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
