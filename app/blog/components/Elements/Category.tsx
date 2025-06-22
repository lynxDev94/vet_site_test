import Link from "next/link";
import React from "react";
import { cx } from "@/lib/utilts";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Category = ({ link = "#", active, name, ...props } : any) => {
  return (
    <Link
      href={link}
      className={cx(
        "inline-block py-1.5 md:py-2 px-6 md:px-10 rounded-full border-solid border-2 border-purple hover:scale-105 transition-all ease duration-200 mt-2  ",
        props.className,
        active ? "bg-[09090B] text-purple" : "bg-white text-[#09090B]" 
      )}
    >
      #{name}
    </Link>
  );
};

export default Category;

