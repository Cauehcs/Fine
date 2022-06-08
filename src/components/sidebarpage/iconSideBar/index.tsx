import { Container } from "./style";
import { IconType } from "react-icons";

interface IconSideBarProps {
  icon: IconType;
  color: string;
  text?: string;
}

export function IconSideBar(props: IconSideBarProps) {
  const Icon = props.icon;
  return (
    <Container>
      {props.text ? <div>{props.text}</div> : null}
      <Icon size={40} color={props.color}></Icon>
    </Container>
  );
}
