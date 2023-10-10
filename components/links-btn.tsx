"use client";

import { Button } from "@nextui-org/react";
import Link from "next/link";
import { LinksType } from "../data/client-routes";
import { usePathname } from "next/navigation";

const LinksBtn = ({ name, url, IconOutline, IconSolid }: LinksType) => {
  const pathname = usePathname();
  return (
    <Link href={url} className="w-full h-fit">
      <Button
        className={`text-lg w-full justify-start`}
        color="primary"
        variant={pathname === url ? "solid" : "light"}
        startContent={pathname === url ? <IconSolid /> : <IconOutline />}
      >
        {name}
      </Button>
    </Link>
  );
};

export default LinksBtn;
