import React, { useEffect } from "react";
import { BaseInput, Label } from "./styled";

type Props = {
  name: string;
  label?: string;
  placeHolder?: string;
  default?: string;
  required?: boolean;
  register: any;
  setValue?: any;
};

const Input: React.FC<Props> = ({
  name,
  label,
  placeHolder,
  default: defaultValue,
  required,
  register,
  setValue,
}) => {
  useEffect(() => {
    if (setValue && defaultValue) {
      setValue(name, defaultValue);
    }
  }, [setValue, name, defaultValue]);

  return (
    <Label style={{ display: "flex", flexDirection: "column" }}>
      {label}
      <BaseInput
        placeholder={placeHolder}
        {...register(name, { required })}
      />
    </Label>
  );
};

export default Input;


