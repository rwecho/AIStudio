import { Button as AntButton } from "antd";
import { ButtonProps } from "antd/lib/button";
import cx from "classnames";
import styles from "./Button.module.css";

interface CustomButtonProps extends ButtonProps {
  variant?: "primary" | "secondary" | "ghost";
  size?: "small" | "medium" | "large";
}

export default function Button({
  variant = "primary",
  size = "medium",
  className,
  children,
  ...props
}: CustomButtonProps) {
  return (
    <AntButton
      className={cx(styles.button, styles[variant], styles[size], className)}
      {...props}
    >
      {children}
    </AntButton>
  );
}
