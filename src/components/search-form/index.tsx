import React from "react";
import { SecondaryButton, TertiaryButton } from "./../../ui/buttons";
import Input from "./../../ui/input";

import { useForm } from "react-hook-form";

type Props = {
  children?: React.ReactNode;
  type: "primary" | "secondary";
  submit: (data: any) => any;
  value?: string;
};
export const SearchForm: React.FC<Props> = ({
  children,
  type,
  submit,
  value,
}) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  return (
    <form
      className="flex flex-col w-full gap-4 py-5 m-auto md:flex-row"
      onSubmit={handleSubmit(submit)}
      autoComplete={"off"}
    >
      <div>
        <Input
          default={value}
          name="query"
          label=""
          register={register}
          placeHolder="Encontra tu producto"
        ></Input>
      </div>
      <div>
        {type == "primary" ? (
          <SecondaryButton>Buscar</SecondaryButton>
        ) : (
          <TertiaryButton>Buscar</TertiaryButton>
        )}
      </div>
    </form>
  );
};
