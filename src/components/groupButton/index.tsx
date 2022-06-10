import React from "react";
import { Container } from "./style";

interface ButtonGroupProps {
  children: React.ReactNode;
  size: "large";
  maxCollumn: number;
  gap: number;
}

export function ButtonGroup(props: ButtonGroupProps) {
  return (
    <Container gap={props.gap} size="large">
      {props.children}
    </Container>
  );
}
