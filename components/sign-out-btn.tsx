"use client";

import SignOutIcon from "@/icons/sign-out";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";

const SignOutBtn = () => {
  const router = useRouter();
  const signOut = () => {
    router.push("/");
  };
  return (
    <Button
      color="danger"
      variant="bordered"
      className="w-full justify-start"
      startContent={<SignOutIcon />}
      onClick={signOut}
    >
      Log Out
    </Button>
  );
};

export default SignOutBtn;
