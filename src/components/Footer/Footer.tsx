import "./Footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <h2 className="footer__title">Let's work together.</h2>
      <div className="footer__buttons-container">
        <a
          href="#tally-open=nr2ZZ2&tally-emoji-text=👋&tally-emoji-animation=wave"
          className="footer__button"
        >
          <p className="footer__button-text">Get in touch</p>
        </a>
        <a
          href="https://linkedin.com/in/lucas-g-marins"
          className="footer__button footer__button--right"
          target="_blank"
        >
          <p className="footer__button-text">LinkedIn</p>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
