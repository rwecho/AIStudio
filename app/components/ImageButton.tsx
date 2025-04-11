"use client";

import { useState } from "react";
import Image from "next/image";
import ImageModal from "./ImageModal";

interface ImageButtonProps {
  imageUrl: string;
  imageAlt: string;
  title?: string;
}

const ImageButton: React.FC<ImageButtonProps> = ({
  imageUrl,
  imageAlt,
  title,
}) => {
  const [showImageModal, setShowImageModal] = useState(false);

  return (
    <>
      <div
        className="relative w-full h-full cursor-pointer"
        onClick={() => setShowImageModal(true)}
      >
        <Image
          src={imageUrl}
          alt={imageAlt}
          fill
          className="object-cover"
          priority={false}
        />
        <div className="absolute inset-0  hover:backdrop-blur-xs hover:bg-black/10 hover:bg-opacity-10 flex items-center justify-center transition-all duration-300">
          <span className="text-white opacity-0 hover:opacity-100 text-sm font-medium">
            点击查看大图
          </span>
        </div>
      </div>

      <ImageModal
        isOpen={showImageModal}
        onClose={() => setShowImageModal(false)}
        imageUrl={imageUrl}
        imageAlt={imageAlt}
        title={title}
      />
    </>
  );
};

export default ImageButton;
