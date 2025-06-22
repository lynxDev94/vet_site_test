import { makeSource, defineDocumentType } from "@contentlayer/source-files";
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import GithubSlugger from "github-slugger"

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Blog = defineDocumentType(() => ({
  name: "Blog",
  filePathPattern: "**/**/*.mdx",
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    publishedAt: {
      type: "date",
      required: true,
    },
    updatedAt: {
      type: "date",
      required: true,
    },
    description: {
      type: "string",
      required: true,
    },
    image: { type: "image" },
    isPublished: {
      type: "boolean",
      default: true,
    },
    author: {
      type: "string",
      required: true,
    },
    tags: {
      type: "list",
      of: { type: "string" },
    },
  },


  computedFields: {
    url: {
      type: 'string',
      resolve: (doc) => `/blog/${doc._raw.flattenedPath}`,
    },
    toc: {
      type: 'json',
      resolve: (doc) => {
        if (!doc?.body?.raw) return []; // Ensure `body.raw` exists
  
        const slugger = new GithubSlugger();
        const headings = [];
  
        // Matches Markdown headings (#, ##, ###, etc.)
        const headingRegex = /^#{1,6}\s+(.+)$/gm;
        const matches = Array.from(doc.body.raw.matchAll(headingRegex));
  
        for (const match of matches) {
          const level = match[0].match(/^#+/)[0].length; // Get heading level (#, ##, ###)
          let content = match[1].trim();
  
          // Remove markdown syntax (like **bold**)
          content = content.replace(/\*\*(.*?)\*\*/g, '$1');
  
          headings.push({
            level: level === 1 ? "one" : level === 2 ? "two" : "three",
            text: content,
            slug: slugger.slug(content),
          });
        }
  
        return headings;
      }
    }
  }
  
}));

export default makeSource({
  contentDirPath: "content",
  documentTypes: [Blog],
  mdx: { remarkPlugins: [remarkGfm], rehypePlugins: [rehypeSlug, [rehypeAutolinkHeadings, {behavior: "append"}]]}
});
 