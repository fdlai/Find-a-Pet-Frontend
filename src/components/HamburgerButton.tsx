import "../blocks/HamburgerButton.css";
import { CSSProperties, MouseEventHandler } from "react";

type HamburgerButtonProps = {
  style?: CSSProperties;
  onClick: MouseEventHandler<HTMLButtonElement>;
};

export default function HamburgerButton({
  style,
  onClick,
}: HamburgerButtonProps) {
  return (
    <button onClick={onClick} className="hamburger-button" style={style}>
      <span className="hamburger-button__line"></span>
      <span className="hamburger-button__line"></span>
      <span className="hamburger-button__line"></span>
    </button>
  );
}
