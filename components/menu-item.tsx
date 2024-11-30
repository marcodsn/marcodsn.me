"use client";

import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";

interface MenuItemProps {
  imageSrc: string;
  label: string;
  subtitle: string;
  href: string;
}

const MenuItem = ({ imageSrc, label, subtitle, href }: MenuItemProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`
        group flex flex-col p-4 py-2 rounded-lg transition-all duration-200 border
        hover:border-zinc-400
        ${isActive ? "bg-zinc-100 dark:bg-zinc-800 border-zinc-400 dark:border-zinc-400" : "border-transparent"}
      `}
    >
      <div className="flex items-center gap-3">
        <div className="transition-transform duration-200 group-hover:scale-110">
          <Image
            src={imageSrc}
            alt={label}
            width={64}
            height={64}
            className="w-12 h-12 object-contain"
          />
        </div>
        <div className="flex-column">
          <p
            className={`
            text-sm font-medium
            ${isActive ? "text-zinc-900 dark:text-zinc-100" : "text-zinc-700 dark:text-zinc-300"}
          `}
          >
            {label}
          </p>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
            {subtitle}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default MenuItem;
