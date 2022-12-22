import { patchUserData } from "lib/api/api";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { PrimaryButton } from "ui/buttons";
import Input from "ui/input";
import { Spinner } from "ui/loader";
import { TinyText } from "ui/text";
import {
  ProfileButtonWrapper,
  ProfileFormWrapper,
  ProfileInputWrapper,
} from "./styled";

type Props = {
  children?: React.ReactNode;
  submit?: (e: any) => void;
  data: any;
};
export const ProfileForm: React.FC<Props> = (props) => {
  const router = useRouter();
  const userData = props.data;
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [saved, setSaved] = useState(false);
  const {
    setValue,
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  async function submit(data: any) {
    setLoading(true);
    setError(false);

    const updated = await patchUserData({
      name: data.name,
      address: data.address,
      phone: parseInt(data.phone),
    });
    if (updated) {
      setLoading(false);
      setError(false);
      setSaved(true);
      setTimeout(() => {
        router.push("/");
      }, 500);
    } else {
      setError(true);
      setLoading(false);
    }
  }

  return (
    <ProfileFormWrapper onSubmit={handleSubmit(submit)}>
      <ProfileInputWrapper>
        <Input
          setValue={setValue}
          required={true}
          name="name"
          register={register}
          label="Nombre Completo"
          default={userData ? userData.name : ""}
        ></Input>
        {errors.name ? (
          <TinyText style={{ color: "red" }}>Obligatorio</TinyText>
        ) : null}
      </ProfileInputWrapper>
      <ProfileInputWrapper>
        <Input
          setValue={setValue}
          required={true}
          name="address"
          register={register}
          label="Direccion"
          default={userData ? userData.address : ""}
        ></Input>
        {errors.address ? (
          <TinyText style={{ color: "red" }}>Obligatorio</TinyText>
        ) : null}
      </ProfileInputWrapper>
      <ProfileInputWrapper>
        <Input
          setValue={setValue}
          required={true}
          name="phone"
          register={register}
          label="Telefono"
          default={userData ? userData.phone : ""}
        ></Input>
        {errors.phone ? (
          <TinyText style={{ color: "red" }}>Obligatorio</TinyText>
        ) : null}
      </ProfileInputWrapper>
      <ProfileButtonWrapper>
        <PrimaryButton>{loading ? <Spinner /> : "Guardar"}</PrimaryButton>
        {saved ? <TinyText>Guardado</TinyText> : null}
        {error ? (
          <TinyText style={{ color: "red" }}>
            Algo salio mal, vuelve a intentarlo.
          </TinyText>
        ) : null}
      </ProfileButtonWrapper>
    </ProfileFormWrapper>
  );
};