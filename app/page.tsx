"use client";

import Image from "next/image";
import Link from 'next/link'
import { IconSearch, IconArrowRight, IconDownload } from "@tabler/icons-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { useState } from "react";

export default function Home() {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div>
      <h1 className="text-4xl font-bold text-center mt-8">Hello, World!</h1>
      <p className="text-center mt-4">
        Welcome to your new Next.js app. <Link href="/gallery">Gallery</Link>
      </p>
      <div className="flex mt-8">
        <ThemeSwitcher />
      </div>
    </div>
  );
}
