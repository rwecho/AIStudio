"use client";
import { FC, useEffect } from "react";
import Image from "next/image";

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
  imageAlt: string;
  title?: string;
}

const ImageModal: FC<ImageModalProps> = ({
  isOpen,
  onClose,
  imageUrl,
  imageAlt,
  title,
}) => {
  // 添加 ESC 键监听功能
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      // 当模态框打开时添加事件监听
      document.addEventListener("keydown", handleKeyDown);
    }

    // 组件卸载或模态框关闭时移除事件监听
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 backdrop-blur-md bg-black/30 flex items-center justify-center p-4">
      <div className="relative w-full max-w-4xl h-full max-h-[90vh] flex flex-col">
        <div className="relative flex-1 w-full">
          <Image
            src={imageUrl}
            alt={imageAlt}
            fill
            className="object-contain"
            priority={true}
            sizes="(max-width: 1200px) 100vw, 1200px"
          />
        </div>
        <div className="mt-4 flex justify-between items-center text-white">
          {title && <h3 className="text-lg font-medium truncate">{title}</h3>}
          <div className="flex items-center ml-auto">
            <button
              onClick={onClose}
              className="bg-white/20 hover:bg-white/30 rounded-full p-2 transition-all duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageModal;
