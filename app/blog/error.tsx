"use client"; // Error components must be Client components

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2>Something went wrong! hahahaha</h2>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          //세그먼트를 다시 렌더링하여 복구 시도
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  );
}
