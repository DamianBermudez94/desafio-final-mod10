import React from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";
import { BaseInput, Label } from "./styled";
type props = {
  setValue?: any;
  name: string;
  label?: string;
  placeHolder?: string;
  default?: string;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
};

const Input: React.FC<props> = (props) => {
  const register = props.register;
  if (props.setValue) {
    props.setValue(props.name, props.default);
  }

  return (
    <Label style={{ display: "flex", flexDirection: "column" }}>
      {props.label}
      <BaseInput
        placeholder={props.placeHolder}
        {...register(props.name, {
          required: props.required,
        })}
      ></BaseInput>
    </Label>
  );
};

export default Input;