"use client";

import { useState } from "react";
import Image from "next/image";
import ImageModal from "./ImageModal";

interface MediaProps {
  mediaUrl: string;
  title?: string;
  width?: number;
  height?: number;
  objectFit?: string;
  objectPosition?: string;
}

const Media: React.FC<MediaProps> = ({
  mediaUrl,
  title,
  width,
  height,
  objectFit = "cover",
  objectPosition = "center",
}) => {
  const [showImageModal, setShowImageModal] = useState(false);

  // 判断媒体类型
  const isImage = /\.(jpg|jpeg|png|gif|webp)$/i.test(mediaUrl);
  const isVideo = /\.(mp4|webm|ogg)$/i.test(mediaUrl);
  const isAudio = /\.(mp3|wav|ogg)$/i.test(mediaUrl);
  const isPdf = /\.pdf$/i.test(mediaUrl);

  return (
    <>
      {isImage ? (
        <>
          <div
            className="relative w-full h-full cursor-pointer"
            onClick={() => setShowImageModal(true)}
          >
            <Image
              src={mediaUrl}
              lazyBoundary="200px"
              alt={title || "Image"}
              fill={width ? false : true}
              className="w-full"
              priority={false}
              width={width}
              height={height}
              objectPosition={objectPosition}
              objectFit={objectFit}
            />
            <div className="absolute inset-0  hover:backdrop-blur-xs hover:bg-black/10 hover:bg-opacity-10 flex items-center justify-center transition-all duration-300">
              <span className="text-white opacity-0 hover:opacity-100 text-sm font-medium"></span>
            </div>
          </div>

          <ImageModal
            isOpen={showImageModal}
            onClose={() => setShowImageModal(false)}
            imageUrl={mediaUrl}
            imageAlt={title || "Image"}
            title={title}
          />
        </>
      ) : isVideo ? (
        <video src={mediaUrl} controls className="w-full h-full object-cover" />
      ) : isAudio ? (
        <audio src={mediaUrl} controls className="w-full" />
      ) : isPdf ? (
        <iframe src={mediaUrl} title={title} className="w-full h-full" />
      ) : (
        <p>不支持的媒体类型</p>
      )}
    </>
  );
};

export default Media;
