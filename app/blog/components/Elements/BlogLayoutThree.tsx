import React from "react";
import Image from "next/image";
import Link from "next/link";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const BlogLayoutThree = ({ blog } : any) => {
  console.log(blog.image.filePath.replace("../public", ""));
  return (
    <div className="group flex flex-col items-center text-purple">
      <Link
        href={blog.url}
        className="h-full rounded-xl overflow-hidden"
      >
        <Image
          placeholder="blur"
          blurDataURL={blog.image?.blurhashDataUrl}
          src={blog.image.filePath.replace("../public", "")}
          alt={blog.title}
          className="aspect-[4/3] w-full h-full object-cover object-center group-hover:scale-105 transition-all ease duration-300"
          width={blog.image.width}
          height={blog.image.height}
          unoptimized 
          // sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </Link>
      <div className="flex flex-col mt-4  w-full">
        <span className="uppercase text-purple font-semibold text-xs sm:text-sm">
          {blog.tags[0]}
        </span>
        
        <Link href={blog.url} className=" my-1">
          <h2 className="font-semibold capitalize text-white text-base sm:text-lg">
            <span className="bg-gradient-to-r from-purple/50 to-purple/50 bg-[length:0px_6px] group-hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500">
              {blog.title}
            </span>
          </h2>
        </Link>
        <span className="capitalize text-gray-300 font-semibold text-sm sm:text-base">
          {new Intl.DateTimeFormat("en-US", {
            month: "long",
            day: "2-digit",
            year: "numeric",
          }).format(new Date(blog.publishedAt))}
        </span>
      </div>
    </div>
  );
};

export default BlogLayoutThree;
