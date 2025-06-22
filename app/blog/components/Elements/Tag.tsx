import Link from "next/link";
import React from "react";
import { cx } from "@/lib/utilts";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Tag = ({ link = "#", name, ...props } : any) => {
  return (
    <Link
      href={link}
      className={cx(
        "inline-block py-2 sm:py-3 px-6 sm:px-10 bg-dark text-white rounded-full capitalize font-semibold border-solid border-2 border-purple hover:scale-105 transition-all ease duration-200 text-sm sm:text-base",
        props.className
      )}
    >
      {name}
    </Link>
  );
};

export default Tag;
