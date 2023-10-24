import "./index.css";

const Footer = () => {
  return (
    <footer>
      <div className="socialLinks">
        <a target="_blank" href="https://www.facebook.com/ernanni" rel="noreferrer"><img src="/images/fb.png" alt="facebook" /></a>
        <a target="_blank" href="https://www.twitter.com/ernannitxt" rel="noreferrer"><img src="/images/tw.png" alt="twitter" /></a>
        <a target="_blank" href="https://www.instagram.com/ernanni.jpg" rel="noreferrer"><img src="/images/ig.png" alt="instagram" /></a>
      </div>
      <div>
        <img src="/images/logo.png" alt="logo organo" />
      </div>
      <div><a target="_blank" href="https://github.com/ernanni" rel="noreferrer">Desenvolvidor por Fabio Ernanni</a></div>
    </footer>
  );
};

export default Footer;
