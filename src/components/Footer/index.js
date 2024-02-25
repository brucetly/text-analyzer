import './index.scss';

export default function Footer() {
  return (
    <div className="footer">
      <span className="developer">Build by Bruce Ly</span>
      <ul className="footer-links">
        <li>
          <a href="/">About Us</a>
        </li>
        <li>
          <a href="/">Contact Us</a>
        </li>
      </ul>
    </div>
  );
}