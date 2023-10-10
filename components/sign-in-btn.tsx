"use client";

import SignInIcon from "@/icons/sign-in";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";

const SignInBtn = () => {
  const router = useRouter();
  const signIn = () => {
    router.push("/dashboard");
  };
  return (
    <Button
      color="primary"
      variant="solid"
      className="w-full justify-start"
      startContent={<SignInIcon />}
      onClick={signIn}
    >
      Log in as Admin
    </Button>
  );
};

export default SignInBtn;
