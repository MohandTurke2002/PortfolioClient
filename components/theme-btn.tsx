'use client'
import { Button } from "@nextui-org/react";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeBtn() {
  const [mounted,setMounted] = useState(false)
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true)
  }, [])
  
  if (!mounted) return null

  return (
    <Button
      color="primary"
      variant="bordered"
      startContent={theme === "light" ? <BsFillSunFill /> : <BsFillMoonFill />}
      onClick={() => setTheme(`${theme === 'light' ? 'dark' : 'light'}`)}
    ></Button>
  );
}
