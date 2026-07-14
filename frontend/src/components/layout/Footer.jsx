import { personalInfo } from '../../data/personalInfo';
import { socialLinks } from '../../data/socialLinks';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__grid">
        <div>
          <a className="footer__brand" href="#home">
            {personalInfo.displayName}
          </a>
          <p>{personalInfo.signature}</p>
        </div>
        <div>
          <h3>Explore</h3>
          <a href="#projects">Projects</a>
          <a href="#certifications">Certifications</a>
          <a href="#contact">Contact</a>
        </div>
        <div>
          <h3>Connect</h3>
          {socialLinks.map((link) => (
            <a key={link.label} href={link.url} target="_blank" rel="noreferrer">
              {link.label}
            </a>
          ))}
        </div>
      </div>
      <div className="footer__bottom">
        <span>© {new Date().getFullYear()} {personalInfo.shortName}. All rights reserved.</span>
      </div>
    </footer>
  );
}
