"use client";

import ArrowLeftIcon from "@/icons/arrow-left";
import ArrowRightIcon from "@/icons/arrow-right";
import { useMediaQuery } from "@mantine/hooks";
import { Button } from "@nextui-org/react";
import { MouseEventHandler } from "react";

export interface propTypes {
  isOpen: Boolean;
  setIsOpen: MouseEventHandler<HTMLButtonElement>;
}

const ToggleSideBarBtn = ({ isOpen, setIsOpen }: propTypes) => {
  const matches = useMediaQuery("(max-width: 767px)");
  return (
    <>
      <Button
        className="w-28 h-3 rounded-full relative sm:w-10 sm:h-10 sm:rounded-tl-none sm:rounded-bl-none sm:rounded-tr-full sm:rounded-br-full sm:transition-all sm:absolute sm:top-10 sm:-right-10"
        isIconOnly={true}
        color="primary"
        variant="solid"
        startContent={
          !matches ? isOpen ? <ArrowLeftIcon /> : <ArrowRightIcon /> : null
        }
        onClick={setIsOpen}
      ></Button>
    </>
  );
};

export default ToggleSideBarBtn;
