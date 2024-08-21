"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";
const ThemeSwitcher = () => {
  const [mount, setMount] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  useEffect(() => {
    setMount(true);
  }, []);

  return mount ? (
    <div>
      <button
        onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
      >
        {currentTheme === "dark" ? (
          <Image
            className="inline-block"
            alt="light"
            width={15}
            height={15}
            src="/sun.svg"
          />
        ) : (
          <Image
            className="inline-block"
            alt="dark"
            width={15}
            height={15}
            src="/moon.svg"
          />
        )}{" "}
        mode
      </button>
    </div>
  ) : null;
};

export default ThemeSwitcher;
