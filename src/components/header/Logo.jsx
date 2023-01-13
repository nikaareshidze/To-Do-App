import { useSelector } from "react-redux";

export default function Logo() {
  const { isDark } = useSelector((state) => state.darkModeSlice);
  const textColor = isDark ? "text-white" : "text-black";

  return <h1 className={textColor}>Logo</h1>;
}
