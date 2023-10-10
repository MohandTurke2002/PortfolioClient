"use client";

import { Divider } from "@nextui-org/react";
import Logo from "@/components/logo";
import ClientRoutes from "@/components/client-routes";
import SignOutBtn from "@/components/sign-out-btn";
import { usePathname } from "next/navigation";
import SignInBtn from "@/components/sign-in-btn";
import ThemeBtn from "@/components/theme-btn";
import ToggleSideBarBtn from "@/components/toggle-side-bar-btn.tsx";
import { useState } from "react";

const SideBar = () => {
  const pathname = usePathname();
  const routes = ["/dashboard", "/dashboard/projects", "/dashboard/skills"];

  const [isOpen, setIsOpen] = useState(true);

  return (
    <div
      className={`fixed bottom-0 w-full sm:h-screen flex flex-col-reverse justify-start items-center gap-y-3  sm:flex-row sm:items-start sm:w-fit sm:backdrop-contrast-100 transition-all z-50 ${
        isOpen ? "backdrop-blur-sm backdrop-contrast-75 h-screen" : "h-6"
      }`}
      onClick={() => setIsOpen(false)}
    >
      <div
        className={`relative flex flex-col justify-start items-center overflow-hidden w-full sm:h-screen gap-y-5 bg-white dark:bg-black sm:bg-transparent dark:sm:bg-transparent transition-all sm:rounded-none rounded-tl-xl rounded-tr-xl ${
          isOpen ? "sm:w-80 h-4/5 p-5" : "sm:w-0 h-0 p-0"
        }`}
      >
        <Logo />
        <ThemeBtn />
        <ClientRoutes />
        <Divider />
        {routes.includes(pathname) ? <SignOutBtn /> : <SignInBtn />}
        <Divider className="absolute right-0 top-0" orientation="vertical" />
      </div>
      <ToggleSideBarBtn isOpen={isOpen} setIsOpen={() => setIsOpen(!isOpen)} />
    </div>
  );
};

export default SideBar;
