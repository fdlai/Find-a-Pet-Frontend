import "../blocks/HamburgerButton.css";
import { CSSProperties, MouseEventHandler } from "react";
import hamburgerIcon from "../assets/hamburger-icon.svg";

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
      <img
        src={hamburgerIcon}
        alt="hamburger-icon"
        className="hamburger-button__image"
      />
    </button>
  );
}
