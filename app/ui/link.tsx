"use client";

import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";

export default function LinkItem(props: { text: string; href: string }) {
  const pathname = usePathname();
  return (
    <div>
      <Link
        className={clsx("", {
          "dark:text-white font-bold": pathname === props.href,
          "darK:text-gray-500": pathname !== props.href,
        })}
        href={props.href}
      >
        {props.text}
      </Link>
    </div>
  );
}
