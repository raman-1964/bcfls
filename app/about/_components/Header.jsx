import React from "react";

const Header = ({ heading, subHeading }) => {
  return (
    <div className="my-2">
      <h1 className="text-center text-[#a5673f] text-[2em] font-bold">
        {heading}
      </h1>
      <p className="text-center text-[1.1em]">{subHeading}</p>
    </div>
  );
};

export default Header;
