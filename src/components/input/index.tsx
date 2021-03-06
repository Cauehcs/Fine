import React from "react";
import { Container } from "./style";

interface InputProps {
  label: string;
  type: "text" | "password";
  margin: "margin-top" | "margin-bottom" | "none";
}

export function Input(props: InputProps) {
  const [focused, setFocused] = React.useState(false);
  const onFocus = () => setFocused(true);
  const onBlur = () => setFocused(false);

  return (
    <Container>
      <label className={focused ? props.margin + " active" : props.margin}>
        {props.label}
      </label>
      <input type={props.type} onFocus={onFocus} onBlur={onBlur} />
    </Container>
  );
}
