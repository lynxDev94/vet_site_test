/* eslint-disable @typescript-eslint/no-explicit-any */
import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const sortBlogs = (blogs : any) => {
  return blogs.slice().sort((a: any, b: any) => b.publishedAt.localeCompare(a.publishedAt));
};

export const cx = (...classNames: any[]) => classNames.filter(Boolean).join(" ");

