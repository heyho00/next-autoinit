"use client";

import { useEffect } from "react";

export default function SomePage() {
  function setCookie(name: string, value: string, options: any) {
    options = {
      path: "/",
      ...options,
    };

    if (options.expires instanceof Date) {
      options.expires = options.expires.toUTCString();
    }

    let updatedCookie =
      encodeURIComponent(name) + "=" + encodeURIComponent(value);

    for (let optionKey in options) {
      updatedCookie += "; " + optionKey;
      let optionValue = options[optionKey];
      if (optionValue !== true) {
        updatedCookie += "=" + optionValue;
      }
    }

    document.cookie = updatedCookie;
  }

  useEffect(() => {
    setCookie("user", "John", { secure: true, "max-age": 3600 });
  });

  return <div>cookie</div>;
}
