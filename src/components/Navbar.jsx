import React from "react";

const content = ["Home", "Our Story", "Solutions", "Contact", "More"];
export const Navbar = () => {
  return (
    <div>
      {content.map((item, index) => (
        <a key={index} href={`/${item}`}>
          {item}
        </a>
      ))}
    </div>
  );
};
