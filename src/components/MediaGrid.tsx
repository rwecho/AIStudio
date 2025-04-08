import React from "react";
import MediaFile from "../app/posts/MediaFile";
import styles from "./MediaGrid.module.css";

interface MediaGridProps {
  files: string[];
}

export const MediaGrid: React.FC<MediaGridProps> = ({ files }) => {
  if (files.length === 0) return null;

  const getItemClassName = (index: number, total: number) => {
    if (total === 1) return styles.fullWidth;
    if (total === 2) return styles.halfWidth;
    if (total === 3) return styles.thirdWidth;
    if (total === 4) {
      return index === 0 ? styles.fullWidth : styles.thirdWidth;
    }
    if (total >= 5) {
      if (index === 0) return styles.fullWidth;
      if (index === 1 || index === 2) return styles.halfWidth;
      return styles.thirdWidth;
    }
    return styles.defaultWidth;
  };

  return (
    <div className={styles.mediaGrid}>
      {files.map((file, index) => (
        <div key={index} className={getItemClassName(index, files.length)}>
          <MediaFile file={file} />
        </div>
      ))}
    </div>
  );
};
