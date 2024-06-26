import React, { useEffect } from "react";
import { useState } from "react";

export default function ComponentLIfeCyle() {
  const [count, setCount] = useState(0);

  // console.log("component mounted.");
  // console.log("component did update.");
  // console.log("component did unmount.");

  useEffect(() => {
    console.log("component mounted.");
  },[]);

  useEffect(() => {
    console.log("component did update.");
  });

  return (
    <>
      <div>ComponentLIfeCyle</div>;
      <button
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
      >
        increment ({count})
      </button>
    </>
  );
}
