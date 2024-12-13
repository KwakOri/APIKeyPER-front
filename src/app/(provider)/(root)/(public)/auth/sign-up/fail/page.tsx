import Button from "@/components/Buttons/Button";
import Mobile from "@/layouts/Mobile";
import { getPagePath } from "@/utils/urls/getPathname";
import Link from "next/link";

const SignUpFailPage = () => {
  return (
    <Mobile>
      <div className="w-full h-full flex justify-center items-center px-4">
        <article
          className={
            "rounded-lg px-10 py-9 flex flex-col gap-6 w-full border border-primary-45 custom-shadow-small"
          }
        >
          <h3 className="text-2xl font-bold text-primary-85">
            이런...오류가 발생했습니다
          </h3>
          <p className="text-primary-85">가입에 실패했습니다.</p>
          <Button>
            <Link href={getPagePath.logInPage()}>로그인화면으로 이동</Link>
          </Button>
        </article>
      </div>
    </Mobile>
  );
};

export default SignUpFailPage;
