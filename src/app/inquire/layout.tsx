import type { Metadata } from "next";
import { inquirePage } from "@/content/site";

export const metadata: Metadata = {
  title: inquirePage.seo.title,
  description: inquirePage.seo.description,
  openGraph: {
    title: inquirePage.seo.title,
    description: inquirePage.seo.description,
  },
};

export default function InquireLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
