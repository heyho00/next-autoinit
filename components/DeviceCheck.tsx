"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";

export default function DeviceCheck() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  if (typeof window !== "undefined") {
    const userAgent = navigator.userAgent;
    console.log(userAgent, "유저에이전ㅇ트");
  }

  return <div>device check</div>;
  // ...
}
