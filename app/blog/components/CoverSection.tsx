import React from "react";
import { sortBlogs } from "@/lib/utilts";
import Image from "next/image";
import Link from "next/link";
import Tag from "./Elements/Tag";
import { slug } from "github-slugger";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CoverSection = ({ blogs }: any) => {
  const sortedBlogs = sortBlogs(blogs);
  const blog = sortedBlogs[1];

  return (
  
    <div className="w-full inline-block">
      <article className="w-full flex flex-col items-start justify-end relative h-[60vh] sm:h-[85vh]">
        <div className="absolute top-0 left-0 bottom-0 right-0 h-full bg-gradient-to-b from-transparent from-0% to-black-100 z-10" />
        <Image
          placeholder="blur"
          blurDataURL={blog.image.blurhashDataUrl}
          src={blog.image.filePath.replace("../public", "")}
          alt={blog.title}
          className="w-full h-full object-center object-cover"
          fill
          unoptimized 
          // priority
          // sizes="(max-width: 768px) 100vw, (max-width: 1180px) 50vw, 50vw"
        />
        <div className="w-full lg:w-3/4 p-6 sm:p-8 md:p-12 lg:p-16 flex flex-col items-start justify-center z-10 text-light">
          <Tag link={`/categories/${slug(blog.tags[0])}`} name={blog.tags[0]} />
          <Link href={blog.url} className="mt-6">
            <h1 className="font-bold capitalize text-white text-lg sm:text-xl md:text-3xl lg:text-4xl ">
             <span className="bg-gradient-to-r from-purple to-purple bg-[length:0px_6px] hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500"> {blog.title}</span>
            </h1>
          </Link>
          <p className=" hidden sm:inline-block mt-4 md:text-lg lg:text-xl font-in text-left">{blog.description}</p>
        </div>
      </article>
    </div>
  );
};

export default CoverSection;
