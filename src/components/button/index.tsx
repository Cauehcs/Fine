import { ButtonHTMLAttributes } from "react";
import { IconType } from "react-icons";
import { Container } from "./style";

interface propsButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  size: "large" | "group";
  margin: "none" | "margin-top" | "margin-bottom";
  icon?: IconType;
  sizeIcon?: number;
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
        <Icon
          className={`${props.text?.length > 0 ? "onMargin" : ""}`}
          size={props.sizeIcon}
          color={props.colorIcon}
        ></Icon>
      ) : null}
      {props.text}
    </Container>
  );
}
