/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import Category from "./Category";
import { slug } from "github-slugger";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Categories = ({ currentSlug, categories } : any) => {
  return (
    <div className=" px-0 md:px-10 gap-2 sxl:px-20 mt-10 border-t-2 text-black-200 border-b-2 border-solid border-purple py-4 flex items-start flex-wrap font-medium mx-5 md:mx-10">
      {categories.map((category : any) => {
        return (
          <Category
            key={category}
            link={`/categories/${category}`}
            name={category}
            active={currentSlug === slug(category)}
          />
        );
      })}
    </div>
  );
};
