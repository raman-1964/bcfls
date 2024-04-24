import React from "react";
import Link from "next/link";

const Heading = ({ heading, ...props }) => {
  return (
    <div className="flex justify-between items-center mb-4">
      <h1 className="text-2xl drop-shadow-sm text-black/90 font-semibold tracking-tight">
        {heading}
      </h1>
      <Link
        href={props.href}
        className="text-md inline text-gray-800 my-auto font-normal"
      >
        more
      </Link>
    </div>
  );
};

export default Heading;
