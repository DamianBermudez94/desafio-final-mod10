import React from "react";
import { SecondaryButton, TertiaryButton } from "./../../ui/buttons";
import Input from "./../../ui/input";
import { BaseForm, FormButtonWrapper, FormInputWrapper } from "./styled";
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
    <BaseForm onSubmit={handleSubmit(submit)} autoComplete={"off"}>
      <FormInputWrapper>
        <Input
          default={value}
          name="query"
          label=""
          register={register}
          placeHolder="Encontra tu producto"
        ></Input>
      </FormInputWrapper>
      <FormButtonWrapper>
        {type == "primary" ? (
          <SecondaryButton>Buscar</SecondaryButton>
        ) : (
          <TertiaryButton>Buscar</TertiaryButton>
        )}
      </FormButtonWrapper>
    </BaseForm>
  );
};