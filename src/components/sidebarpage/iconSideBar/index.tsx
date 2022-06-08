import { InputHTMLAttributes } from "react";
import { Container } from "./style";
import { COLORS } from "../../../constants";
import { IconType } from "react-icons";

interface IconSideBarProps {
  icon: IconType;
  color: string;
}

export function IconSideBar(props: IconSideBarProps) {
  const Icon = props.icon;
  return (
    <Container>
      <Icon size={40} color={props.color}></Icon>
    </Container>
  );
}
