/* eslint-disable @typescript-eslint/no-explicit-any */

import { allBlogs } from "@/.contentlayer/generated";
import React from "react";
import Tag from "../components/Elements/Tag";
import Image from "next/image";
import Footer from "@/components/Footer";
import { slug } from "github-slugger";
import { RenderMdx } from "../components/Elements/RenderMdx";
import { FloatingNav } from "@/components/ui/FloatingNav";
import siteMetaData from "@/lib/siteMetaData";
import Menu from "@/components/ui/Menu";

interface MetadataProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  params: any;
}

export async function generateStaticParams() {
  return allBlogs.map((blog) => ({ slug: blog._raw.flattenedPath }));
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function generateMetadata({ params }: MetadataProps) {
  const { slug } = await params;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const blog: any = allBlogs.find((blog) => blog._raw.flattenedPath === slug);
  if (!blog) {
    return;
  }

  const publishedAt = new Date(blog.publishedAt).toISOString();
  const modifiedAt = new Date(blog.updatedAt || blog.publishedAt).toISOString();
  let imageList = [siteMetaData.socialBanner];
  if (blog.image) {
    imageList =
      typeof blog.image.filePath === "string"
        ? [siteMetaData.siteUrl + blog.image.filePath.replace("../public", "")]
        : blog.image;
  }
  const ogImages = imageList.map((img) => {
    return {
      url: img.includes("http") ? img : siteMetaData.siteUrl + img,
    };
  });

  return {
    title: blog.title,
    description: blog.description,
    openGraph: {
      title: blog.title,
      description: blog.description,
      url: siteMetaData.siteUrl + blog.url,
      siteName: siteMetaData.title,
      locale: "en_US",
      type: "article",
      publishedTime: publishedAt,
      modifiedTime: modifiedAt,
      images: ogImages,
      author: [siteMetaData.author],
    },
  };
}

interface MetaData {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  params: any;
}

export default async function BlogPage({ params }: MetaData) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const awaitedParams = await params;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const blog: any = allBlogs.find(
    (blog) => blog._raw.flattenedPath === awaitedParams.slug
  );

  let imageList = [siteMetaData.socialBanner];
  if (blog.image) {
    imageList =
      typeof blog.image.filePath === "string"
        ? [siteMetaData.siteUrl + blog.image.filePath.replace("../public", "")]
        : blog.image;
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: blog.title,
    description: blog.description,
    image: imageList,
    datePublished: new Date(blog.publishedAt).toISOString(),
    dateModified: new Date(blog.updatedAt || blog.publishedAt).toISOString(),
    author: [
      {
        "@type": "Person",
        name: "LynxPounce",
        url: "https://lynxpounce.com/me.jpg",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
        <Menu/>
        {/* <FloatingNav
          navItems={[
            { name: "Home", link: "/" },
            { name: "Blog", link: "/blog" },
          ]}
        /> */}
        <div className="w-full inline-block">
          <article className="w-full flex flex-col items-start justify-end relative h-[85vh]">
            <div className="absolute top-0 left-0 bottom-0 right-0 h-full bg-gradient-to-b from-transparent from-0% to-black-100 z-10" />
            <Image
              placeholder="blur"
              blurDataURL={blog.image.blurhashDataUrl}
              src={blog.image.filePath.replace("../public", "")}
              alt={blog.title}
              className="aspect-square w-full h-full object-cover object-center"
              width={blog.image.width}
              height={blog.image.height}
              unoptimized
              // priority
              // sizes="100vw "
            />
            <div className="w-full z-10 flex flex-col items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <Tag
                name={blog.tags[0]}
                link={`/categories/${slug(blog.tags[0])}`}
                className="px-6 text-sm py-2"
              />
              <h1 className="inline-block text-center mt-6 font-semibold capitalize text-purple text-2xl md:text-3xl  lg:text-5xl leading-normal relative w-5/6">
                {blog.title}
              </h1>
            </div>
          </article>
        </div>
        <div className="grid grid-cols-12 gap-y-8 lg:gap-8 sxl:gap-16 mt-8 px-5 md:px-10">
        <div className="col-span-12 lg:col-span-6">

            <details
              className="border-[1px] border-solid border-purple text-white rounded-lg p-4 sticky top-6 max-h-[80vh] overflow-hidden overflow-y-auto"
              open
            >
              <summary className="text-lg font-semibold capitalize cursor-pointer">
                Table Of Content
              </summary>
              <ul className="mt-4 font-in text-base">
                {blog.toc.map((heading: any) => {
                  return (
                    <li key={`${heading.slug}`} className="py-1">
                      <a
                        href={`#${heading.slug}`}
                        data-level={heading.level}
                        className="data-[level=two]:pl-0 data-[level=two]:pt-2 data-[level=two]:border-t border-solid border-purple/70 data-[level=three]:pl-4 sm:data-[level=three]:pl-6 flex items-center justify-start"
                      >
                        {heading.level == "three" ? (
                          <span className="flex w-1 h-1 rounded-full bg-purple mr-2">
                            &nbsp;
                          </span>
                        ) : null}
                        <span className="hover:underline">{heading.text}</span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </details>
          </div>
          <RenderMdx blog={blog} />
        </div>
        <div className="max-w-7xl w-full mt-20">
          <Footer />
        </div>
      </main>
    </>
  );
}
