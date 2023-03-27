import Link from "next/link";

export const metadata = {
  title: 'Next.js'
};

export default function Home() {
  return (
    <>
      <div>Next js Home page</div>

      <Link href="/first">go to first</Link>
    </>
  )
}
