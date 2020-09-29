import Link from "next/link";
import { useState } from "react";
import dynamic from "next/dynamic";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

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

  return (
    <div className={scrolled ? "shrinked_nav navbar" : "navbar"}>
      <span>
        <img src="dlogo.png" alt="DCU" /><Link href="/" className="navbar__title">Doctors' Career Updates</Link>
      </span>
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
  );
}

export default Navbar;
