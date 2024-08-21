"use client";

import { useTheme } from "next-themes";
import Image from "next/image";

export default function Profile() {
  const { theme } = useTheme();

  return (
    <div className="flex gap-10 flex-row">
      <Image
        className="rounded-[50%]"
        width={100}
        height={100}
        alt="profile"
        src="/profile.jpg"
      />
      <div className="flex flex-col justify-center gap-[2px] text-sm text-[lightslategray]">
        <a
          target="_blank"
          href="https://github.com/SajjadMashhadi"
          className="  flex flex-row items-center "
        >
          <Image
            width={20}
            height={18}
            className="inline-block ml-[6px] mr-[6px] w-[18px] h-[18px]"
            src={
              theme === "light" ? "/github-mark.svg" : "/github-mark-white.svg"
            }
            alt="github"
          />
          sajjadMashhadi
        </a>
        <a
          target="_blank"
          href="https://gitlab.com/Sajjad77"
          className="flex flex-row items-center"
        >
          <Image
            width={30}
            height={30}
            className="inline-block"
            src="/gitlab-logo-500.svg"
            alt="gitlab"
          />
          sajjad77
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/sajjad-mashhadi/"
          className="  flex flex-row items-center "
        >
          <Image
            width={20}
            height={18}
            className="inline-block ml-[6px] mr-[6px] w-[18px] h-[18px]"
            src="/icons8-linkedin.svg"
            alt="linkedin"
          />
          sajjad-mashhadi
        </a>
      </div>
    </div>
  );
}
