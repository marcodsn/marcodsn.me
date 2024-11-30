import React from "react";
import { ThemeSwitcher } from "@/components/theme-switcher";
import MobileMenu from "./mobile-menu";

const Topbar = () => {
  return (
    <header className="relative top-0 left-0 right-0 p-4 flex justify-between items-center z-50">
      <div className="text-sm uppercase font-semibold">Marco De Santis</div>
      {/* <div className="flex items-center gap-4">
        <ThemeSwitcher />
        <MobileMenu />
      </div> */}
    </header>
  );
};

export default Topbar;
