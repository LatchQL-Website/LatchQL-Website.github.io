const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="footer-left">
        <a href="/">
          <img className="icon" id="logo" src="public/header.png" />
        </a>
      </div>
      <div className="footer-middle">
        <h1 id="copyright">&copy; 2022 LatchQL | MIT License</h1>
      </div>
      <div className="footer-right">
        <a href="https://github.com/oslabs-beta/LatchQL">
          <img
            className="footer-logos"
            src="https://cdn-icons-png.flaticon.com/512/2111/2111432.png"
            alt=""
          />
        </a>
        <a href="https://www.scaryforkids.com/pics/scary-movie.jpg" target="_blank">
          <img
            className="footer-logos"
            src="https://cdn-icons-png.flaticon.com/512/5968/5968933.png"
            alt=""
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
