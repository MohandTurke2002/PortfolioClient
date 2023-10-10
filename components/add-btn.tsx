import PlusIcon from "@/icons/plus";
import { Button } from "@nextui-org/react";
import Link from "next/link";
interface propTypes {
  url: String;
  name: String;
}
const AddBtn = ({ url, name }: propTypes) => {
  return (
    <Link href={`${url}`}>
      <Button startContent={<PlusIcon />}>{name}</Button>
    </Link>
  );
};

export default AddBtn;
