import { patchUserData } from "src/lib/api/api";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { PrimaryButton } from "./../../ui/buttons";
import Input from "./../../ui/input";
import { Spinner } from "./../../ui/loader";
import { TinyText } from "./../../ui/text";
import {
  ProfileButtonWrapper,
  ProfileFormWrapper,
  ProfileInputWrapper,
} from "./styled";

type Props = {
  children?: React.ReactNode;
  data: any;
};

export const ProfileForm: React.FC<Props> = ({ data }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [saved, setSaved] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: data?.name || "",
      address: data?.address || "",
      phone: data?.phone?.toString() || "",
    },
  });

  async function submit(formData: any) {
    setLoading(true);
    setError(false);

    const updated = await patchUserData({
      name: formData.name,
      address: formData.address,
      phone: parseInt(formData.phone),
    });

    if (updated) {
      setLoading(false);
      setSaved(true);
      setTimeout(() => router.push("/"), 500);
    } else {
      setLoading(false);
      setError(true);
    }
  }

  return (
    <ProfileFormWrapper onSubmit={handleSubmit(submit)}>
      <ProfileInputWrapper>
        <Input
          required
          name="name"
          register={register}
          label="Nombre Completo"
        />
        {errors.name && <TinyText style={{ color: "red" }}>Obligatorio</TinyText>}
      </ProfileInputWrapper>

      <ProfileInputWrapper>
        <Input
          required
          name="address"
          register={register}
          label="Dirección"
        />
        {errors.address && <TinyText style={{ color: "red" }}>Obligatorio</TinyText>}
      </ProfileInputWrapper>

      <ProfileInputWrapper>
        <Input
          required
          name="phone"
          register={register}
          label="Teléfono"
        />
        {errors.phone && <TinyText style={{ color: "red" }}>Obligatorio</TinyText>}
      </ProfileInputWrapper>

      <ProfileButtonWrapper>
        <PrimaryButton>{loading ? <Spinner /> : "Guardar"}</PrimaryButton>
        {saved && <TinyText>Guardado</TinyText>}
        {error && (
          <TinyText style={{ color: "red" }}>
            Algo salió mal, vuelve a intentarlo.
          </TinyText>
        )}
      </ProfileButtonWrapper>
    </ProfileFormWrapper>
  );
};
