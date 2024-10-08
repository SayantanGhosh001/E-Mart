const Footer = () =>{
    return (
      <>
        <footer className="footer-distributed">
          <div className="footer-right">
            <a
              href="https://www.facebook.com/sayantan.ghosh.129357"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-facebook"></i>
            </a>
            <a
              href="https://twitter.com/iamsayantan_001?t=c-wv_eV8EWp2tR2W6jPnmg&s=09"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-twitter"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/sayantan-ghosh-311b36222"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-linkedin"></i>
            </a>
            <a href="#">
              <i className="fa fa-github"></i>
            </a>
          </div>

          <div className="footer-left">
            <p className="footer-links">
              <a href="#">Help</a>
              {" | "}
              <a href="#">Policy</a>
              {" | "}
              <a href="#">Pricing</a>
              {" | "}
              <a href="#">About</a>
              {" | "}
              <a href="#">Faq</a>
              {" | "}
              <a href="#">Contact</a>
            </p>

            <p>Made with ❤️ by SAYANTAN || &copy; 2024 All rights reserved</p>
          </div>
        </footer>
      </>
    );
}

export default Footer;