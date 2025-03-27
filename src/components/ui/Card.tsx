import { ReactNode } from "react";
import cx from "classnames";
import styles from "./Card.module.css";

interface CardProps {
  children: ReactNode;
  className?: string;
  hoverable?: boolean;
  onClick?: () => void;
}

export default function Card({
  children,
  className,
  hoverable,
  onClick,
}: CardProps) {
  return (
    <div
      className={cx(styles.card, { [styles.hoverable]: hoverable }, className)}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
