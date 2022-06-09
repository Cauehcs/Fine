import { ButtonHTMLAttributes } from "react";
import { Container } from "./style";

interface propsButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

export function Button(props: propsButton) {
  return <Container>{props.text}</Container>;
}
