"use client";

import Image from "next/image";
import { image as imageType } from "@/app/utils/types";
import clsx from "clsx";
import { useState } from "react";
import Modal from "./modal";

export default function ImageItem({
  image,
  vertical,
  handleHover,
  blur,
  handleHoverOut,
}: {
  image: imageType;
  vertical?: boolean;
  handleHover: (id: number) => void;
  handleHoverOut: () => void;
  blur: boolean;
}): React.ReactNode {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="relative">
      {showModal && (
        <Modal
          title={image.title}
          description={image.description}
          technologies={image.technologies}
        />
      )}
      <Image
        onMouseEnter={() => {
          setShowModal(true);
          handleHover(image.id);
        }}
        onMouseLeave={() => {
          setShowModal(false);
          handleHoverOut();
        }}
        className={clsx(
          "rounded-xl cursor-pointer border-[0.5px] border-solid border-[#80808062] dark:border-none",
          {
            "hidden lg:inline-block h-[250px] w-[200px]": vertical,
            " h-auto  lg:h-[120px] w-[300px] sm:w-[230px] sm:h-[140px] lg:w-[200px]":
              !vertical,
            "transition-all duration-500 blur-[4px]": blur,
          }
        )}
        width={500}
        height={300}
        src={image.src}
        alt={image.text}
      />
    </div>
  );
}
