import { FilePdfOutlined, FileTextOutlined } from "@ant-design/icons";
import { Image } from "antd";

// 辅助函数：获取文件扩展名
const getFileExtension = (filename: string): string => {
  return filename.split(".").pop()?.toLowerCase() || "";
};

// 辅助函数：根据扩展名判断文件类型
const getFileType = (filename: string): string => {
  const ext = getFileExtension(filename);

  if (["jpg", "jpeg", "png", "gif", "webp", "bmp"].includes(ext)) {
    return "image";
  } else if (["mp4", "webm", "ogg", "mov"].includes(ext)) {
    return "video";
  } else if (["mp3", "wav", "ogg", "aac"].includes(ext)) {
    return "audio";
  } else if (ext === "pdf") {
    return "pdf";
  } else {
    return "other";
  }
};

// 媒体文件组件
const MediaFile = ({ file }: { file: string }) => {
  const fileType = getFileType(file);
  const fileUrl = `/api/oss?ossKey=${file}`;

  switch (fileType) {
    case "image":
      return (
        <Image
          src={fileUrl}
          alt="Media"
          style={{
            maxWidth: "100%",
            maxHeight: "300px",
            objectFit: "cover",
          }}
        />
      );
    case "video":
      return (
        <video
          controls
          style={{ maxWidth: "100%", maxHeight: "300px", objectFit: "cover" }}
        >
          <source src={fileUrl} />
          您的浏览器不支持视频播放
        </video>
      );
    case "audio":
      return (
        <audio controls style={{ width: "100%" }}>
          <source src={fileUrl} />
          您的浏览器不支持音频播放
        </audio>
      );
    case "pdf":
      return (
        <div>
          <a href={fileUrl} target="_blank" rel="noopener noreferrer">
            <FilePdfOutlined /> 查看PDF文档
          </a>
        </div>
      );
    default:
      return (
        <div>
          <a href={fileUrl} target="_blank" rel="noopener noreferrer">
            <FileTextOutlined /> {file.split("/").pop() || "下载文件"}
          </a>
        </div>
      );
  }
};

export default MediaFile;
