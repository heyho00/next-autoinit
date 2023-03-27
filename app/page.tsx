import DeviceCheck from "@/components/DeviceCheck";
import WrapClientComp from "@/components/WrapClientComp";

export const metadata = {
  title: "Next.js",
};

export default function Home(res: any) {
  return (
    <>
      <div>Next js Home page</div>
      <WrapClientComp>
        <DeviceCheck />
      </WrapClientComp>
    </>
  );
}
