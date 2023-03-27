import SomePage from "@/components/SomePage";
import WrapClientComp from "@/components/WrapClientComp";
import Link from "next/link";
import { cookies } from "next/headers";

export const metadata = {
  title: "Next.js",
};

export default function Home(res: any) {
  const cookieStore = cookies();
  const cookieList = cookieStore.getAll();
  return (
    <>
      <div>Next js Home page</div>

      <WrapClientComp>
        <SomePage />
      </WrapClientComp>

      <div>{cookieList[0].value}</div>

      <Link href="/first">go to first</Link>
    </>
  );
}
