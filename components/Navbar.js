import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { BsList, BsX } from "react-icons/bs";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [openNavMenu, setOpenNavMenu] = useState(false);

  if (process.browser) {
    // Client-side-only code
    window.onscroll = function () {
      scrollFunction();
    };

    const currentLocation = useRouter();

    useEffect(() => {
      setOpenNavMenu(false);
    }, [currentLocation])

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
        <Link href="/"><img src="dlogo.png" alt="DCU" /></Link>
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
            <Link href="/pendaftaran-umum">Register</Link>
          </li>
        </ul>
      </div>
      {/* NAV MENU, ONLY TRIGGERED ON CLICK */}

      <div
        className={` triggered__navmenu ${
          scrolled ? `shrinked_triggered` : null
        } ${!openNavMenu ? `hidden` : ``}`}
      >
        <ul>
          <Link href="/">
            <li>Home</li>
          </Link>
          <Link href="/dcu-mg">
            <li>DCU MG</li>
          </Link>
          <Link href="/rewind">
            <li>Rewind</li>
          </Link>
          <Link href="/pendaftaran-umum">
            <li>Register</li>
          </Link>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
