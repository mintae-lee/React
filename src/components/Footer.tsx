import React from 'react';
import logo from '../logo.svg';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="md-flex md-justify-between">
        <a href='https://mindful-a7340.web.app/' className="footer__logo">
          <img src={logo} height="30" alt="Logo" />
        </a>
        <ul className="footer__navi flex">
          <li><a href='https://mindful-a7340.web.app/'>About</a></li>
          <li><a href='https://mindful-a7340.web.app/'>サイトマップ</a></li>
          <li><a href='https://mindful-a7340.web.app/'>プライバシーポリシー</a></li>
        </ul>
      </div>
      <hr />
      <p className="copyright">
        © 2023 Cat Inc. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
