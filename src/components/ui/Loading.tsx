import { Spin } from "antd";
import styles from "./Loading.module.css";

interface LoadingProps {
  spinning?: boolean;
  fullScreen?: boolean;
  tip?: string;
}

export default function Loading({
  spinning = true,
  fullScreen,
  tip,
}: LoadingProps) {
  if (!spinning) return null;

  return (
    <div className={`${styles.loading} ${fullScreen ? styles.fullScreen : ""}`}>
      <Spin size="large" tip={tip} />
    </div>
  );
}
