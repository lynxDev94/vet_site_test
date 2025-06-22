"use client";

import React from "react";
import { useMDXComponent } from "next-contentlayer/hooks";
import Image from "next/image";

const mdxComponents = {
  Image,
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const RenderMdx = ({ blog }: any) => {
  const MDXContent = useMDXComponent(blog.body.code);
  return (
    <div className="col-span-12 lg:col-span-6 font-in prose text-white 
      prose-headings:text-purple prose-p:text-white prose-li:text-white 
      prose-a:text-blue-400 hover:prose-a:text-blue-300 
      prose-strong:text-purple/70 prose-headings:prose-strong:text-white 
      prose-em:text-gray-300
      sm:prose-base 
      md:prose-lg max-w-3xl mx-auto 
      
      prose-blockquote:bg-purple-800/30 prose-blockquote:text-purple-300 
      prose-blockquote:p-4 prose-blockquote:px-6 prose-blockquote:border-l-4 prose-blockquote:border-purple-500">
      <MDXContent components={mdxComponents} />
    </div>
  );
};
