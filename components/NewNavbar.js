import { useState } from "react";

export default function NewNavbar() {
  //   const selectElement = (element) => document.querySelector(element);

  //   selectElement(".mobile-menu").addEventListener("click", () => {
  //     selectElement("header").classList.toggle("active");
  //   });

  const [menuOn, setMenuOn] = useState(false);

  const handleClick = () => {
    setMenuOn(true);
  };

  return (
    <div>
      <div className="line__container"></div>
      <span className="line ">
        <span className=" line-top ">
          <span className=" active"></span>
        </span>
      </span>
      <span className="line line-bottom active"></span>
    </div>
  );
}
