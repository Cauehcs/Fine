import { ButtonHTMLAttributes } from "react";
import { IconType } from "react-icons";
import { COLORS } from "../../constants";
import { Container } from "./style";

interface propsButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  size: "large";
  margin: "none" | "margin-top" | "margin-bottom";
  icon?: IconType;
  sizeIcon?: string;
  colorIcon?: string;
  colorText?: string;
  colorBackground: string;
}

export function Button(props: propsButton) {
  const Icon = props.icon;
  return (
    <Container
      colorText={props.colorText}
      colorBackground={props.colorBackground}
      className={`${props.size} ${props.margin}`}
    >
      {props.icon ? (
        <Icon size={props.sizeIcon} color={props.colorIcon}></Icon>
      ) : null}
      {props.text}
    </Container>
  );
}
