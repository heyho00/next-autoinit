import { cookies } from "next/headers";

export default function Page() {
  const cookieStore = cookies();
  const cookieList = cookieStore.getAll();
  console.log(cookieList, "cookieList");

  return <div>{cookieList[0].value}</div>;
}
