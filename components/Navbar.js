import Link from "next/link";
import { useState } from "react";

import { BsList, BsX } from "react-icons/bs";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [openNavMenu, setOpenNavMenu] = useState(false);

  if (process.browser) {
    // Client-side-only code
    window.onscroll = function () {
      scrollFunction();
    };

    function scrollFunction() {
      if (
        document.body.scrollTop > 50 ||
        document.documentElement.scrollTop > 50
      ) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }
  }

  const handleClick = () => {
    if (openNavMenu) {
      setOpenNavMenu(false);
    } else {
      setOpenNavMenu(true);
    }
  };

  return (
    <>
      <div className={scrolled ? "shrinked_nav navbar" : "navbar"}>
        <span>
          <img src="dlogo.png" alt="DCU" />
          <div className="navbar__title">
            <Link href="/">Doctors' Career Updates</Link>
          </div>
        </span>

        <div onClick={handleClick} className="trigger">
          {!openNavMenu ? <BsList /> : <BsX />}
        </div>

        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/dcu-mg">DCU MG</Link>
          </li>
          <li>
            <Link href="/rewind">Rewind</Link>
          </li>
          <li>
            <Link href="/examplehookform">Register</Link>
          </li>
        </ul>
      </div>
      {/* NAV MENU, ONLY TRIGGERED ON CLICK */}
      {openNavMenu ? (
        <div
          className={
            scrolled
              ? "shrinked_triggered triggered__navmenu"
              : "triggered__navmenu"
          }
        >
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/dcu-mg">DCU MG</Link>
            </li>
            <li>
              <Link href="/rewind">Rewind</Link>
            </li>
            <li>
              <Link href="/examplehookform">Register</Link>
            </li>
          </ul>
        </div>
      ) : null}
    </>
  );
}

export default Navbar;
