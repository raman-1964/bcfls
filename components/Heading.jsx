import React from "react";
import Link from "next/link";

const Heading = ({ heading, ...props }) => {
  return (
    <div className="flex justify-between items-center my-3">
      <h1 className="text-black text-2xl font-normal">{heading}</h1>
      <Link href={props.href}> Go to</Link>
    </div>
  );
};

export default Heading;
