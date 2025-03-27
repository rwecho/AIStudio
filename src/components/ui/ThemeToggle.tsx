import { Button } from "antd";
import { useTheme } from "@/hooks/useTheme";
import { SunIcon, MoonIcon } from "@/components/ui/Icons";

export default function ThemeToggle() {
  const { isDark, setTheme } = useTheme();

  return (
    <Button
      type="text"
      className="theme-toggle"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      icon={isDark ? <SunIcon /> : <MoonIcon />}
    />
  );
}
