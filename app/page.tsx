import { cookies } from "next/headers";

export default function Home() {
  const cookieStore = cookies();
  const cookieList = cookieStore.getAll();

  console.log(cookieList, "theme");

  return (
    <div>
      <p>next</p>
    </div>
  );
}
