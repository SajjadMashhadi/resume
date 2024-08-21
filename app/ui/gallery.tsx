"use client";

import { images, verticalImage } from "@/app/utils/data";
import ImageItem from "./imageItem";
import { useState } from "react";

export default function Gallery() {
  const [hoveredImage, setHoveredImage] = useState<number | undefined>(
    undefined
  );
  const handleHover = (id: number) => {
    setHoveredImage(id);
  };

  const handleHoverOut = () => {
    setHoveredImage(undefined);
  };
  return (
    <div className="flex relative flex-row gap-2">
      <ImageItem
        blur={hoveredImage !== undefined && verticalImage.id !== hoveredImage}
        handleHover={handleHover}
        handleHoverOut={handleHoverOut}
        vertical={true}
        image={verticalImage}
      />

      <div className="flex flex-wrap gap-2 relative rounded-[5px]">
        {images.map((image) => (
          <ImageItem
            blur={hoveredImage !== undefined && image.id !== hoveredImage}
            handleHover={handleHover}
            handleHoverOut={handleHoverOut}
            key={image.text}
            image={image}
          />
        ))}
      </div>
    </div>
  );
}
