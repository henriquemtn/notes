import React from "react";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="h-full dark:bg-[#191919]">{children}</div>;
}