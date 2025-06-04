import "./Header.scss";
import { useState } from "react";

function Header() {
  const [headerClass, setHeaderClass] = useState("header");

  document.addEventListener("scroll", function () {
    const pixels = window.pageYOffset;

    if (pixels > 80) {
      setHeaderClass("header header__scrolled");
    } else {
      setHeaderClass("header");
    }
  });

  return (
    <header className={headerClass}>
      <div className="header__content-container">
        <img
          src="./lucas-notion.png"
          className="header__logo"
          alt="lucas marins face"
        />
        <h2 className="header__title">
          Lucas <br /> Hintz Marins
        </h2>
      </div>
    </header>
  );
}

export default Header;
