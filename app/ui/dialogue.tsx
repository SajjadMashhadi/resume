"use client";

import { useState, useRef, useEffect } from "react";

const text = "Hello! welcome to my page :)";

export default function Dialogue() {
  const [placeholder, setPlaceholder] = useState(text[0]);

  const index = useRef(0);

  useEffect(() => {
    function tick() {
      index.current++;
      setPlaceholder((prev: string) => prev + text[index.current]);
    }
    if (index.current < text.length - 1) {
      let addChar = setInterval(tick, 100);
      return () => clearInterval(addChar);
    }
  }, [placeholder]);

  useEffect(() => {
    if (placeholder.length === text.length) {
      setTimeout(() => {
        setPlaceholder(text[0]);
        index.current = 0;
      }, 2000);
    }
  }, [placeholder]);

  return (
    <div className="absolute top-[40px] left-0 sm:left-[100px] lg:left-[200px] xl:left-0 xl:top-[70px] p-[10px]  rounded-[10px] text-gray-500 dark:text-gray-500 bg-gray-50 dark:bg-gray-800 text-[13px] ">
      {placeholder}
    </div>
  );
}
