import Divider from "@/components/Divider/Divider";
import DropdownSelect from "@/components/Dropdown/DropdownSelect";
import { logOut } from "@/service/service.auth";
import { cn } from "@/utils/tailwind/cn";
import { cva, VariantProps } from "class-variance-authority";
import { useRouter } from "next/navigation";

const dropdownVariants = cva(
  `absolute bg-primary-85 w-full  transition-all duration-300 overflow-hidden py-2 px-4`,
  {
    variants: {
      active: {
        true: `-translate-y-full`,
        false: `-translate-y-0`,
      },
    },
  }
);

interface DropdownProps extends VariantProps<typeof dropdownVariants> {}

const Dropdown = ({ active }: DropdownProps) => {
  const router = useRouter();
  const handleClickLogOut = () => {
    logOut();
  };
  const handleClickAddKeyButton = () => {
    router.push("/token/write");
  };
  return (
    <div className={cn(dropdownVariants({ active }))}>
      <DropdownSelect
        icon="IC_Plus"
        label="새로운 KEY 추가하기"
        onClick={handleClickAddKeyButton}
      />
      <Divider />
      <DropdownSelect
        icon="IC_LogOut"
        label="로그아웃"
        onClick={handleClickLogOut}
      />
    </div>
  );
};

export default Dropdown;
