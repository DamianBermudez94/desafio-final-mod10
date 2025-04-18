import React from "react";
import { BaseInput, Label } from "./styled";

type Props = {
  name: string;
  label?: string;
  placeHolder?: string;
  default?: string;
  required?: boolean;
  value?: string;

  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input: React.FC<Props> = ({
  name,
  label,
  placeHolder,
  required,
  value,
  onChange,
  register
}) => {
  const inputProps = register ? register(name, { required }) : {};
  return (
    <Label style={{ display: "flex", flexDirection: "column" }}>
      {label}
      <BaseInput
        name={name}
        placeholder={placeHolder}
        value={value}
        onChange={onChange}
        required={required}
        {...inputProps}

      />
    </Label>
  );
};
export default Input;