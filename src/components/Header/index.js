import { ReactComponent as Website } from '../../assets/icons/website.svg';
import { ReactComponent as Twitter } from '../../assets/icons/twitter.svg';
import { ReactComponent as LinkedIn } from '../../assets/icons/linkedin.svg';
import './index.scss';
import '../../../src/styles.scss';

export default function Header() {
  return (
    <div className="header">
      <span className="app-title">Text Analyzer</span>
      <ul className="nav-links">
        <li>
          <a href="https://codewithbasit.netlify.app/">
            <Website />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/Basit_Miyanji">
            <Twitter />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/brucely/">
            <LinkedIn />
          </a>
        </li>
      </ul>
    </div>
  )
}