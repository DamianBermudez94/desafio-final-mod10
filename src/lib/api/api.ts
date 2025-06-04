interface Options extends RequestInit {
  headers?: (Headers & { Authorization: string }) | {};
  body?: string;
}
import { useRouter } from "next/router";

export async function fetchApi(input: RequestInfo, options?: Options) {
  const token = await getSettedToken();
  const formattedOptions = options || {};
  if (token) {
    formattedOptions.headers = {
      ...options?.headers,
      Authorization: "bearer " + token,
    };
  }

  const url = "https://dwf-m9-desafio-final.vercel.app/api" + input;



  const res = await fetch(url, formattedOptions);

  if (res.status >= 200 && res.status < 300) {
    return await res.json();
  } else {
    const json = await res.json();
    throw { message: "Algo salio mal", error: json };
  }
}

type AuthProps = {
  email: string;
};

export async function getAuth(body: AuthProps): Promise<AuthResponse> {
  try {
    const res = await fetchApi("/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    return res; // asumimos que res es del tipo AuthResponse
  } catch (error: any) {
    return { error: error.message || "Error desconocido" };
  }
}

type AuthResponse = {
  error?: string;
};

type TokenResponse = {
  token?: string;
  error?: string;
};

type TokenProps = {
  email: string;
  code: number;
};

export async function getToken(body: TokenProps): Promise<TokenResponse> {
  try {
    const res = await fetchApi("/auth/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    setToken(res.token);
    return { token: res.token }; // importante devolver el valor real
  } catch (error: any) {
    return { error: error.message || "Error desconocido" };
  }
}


export async function getOrderUrl(id: string) {
  try {
    const url = await fetchApi("/order?productId=" + id, {
      method: "POST",
    });
    // const json = await url.json()
    console.log(url);

    return url;
  } catch (error) {
    throw error;
  }
}
export async function getProduct(query: string = "", limit: number = 5, offset: number = 0) {
  try {
    const data = await fetchApi(`/products?q=${query}&limit=${limit}&offset=${offset}`);
    return data; // Devuelve los resultados y la paginación
  } catch (error) {
    console.error("Error al obtener productos:", error);
    throw error;
  }
}


export function setToken(token: string) {
  localStorage.setItem("token", token);
}
export async function getSettedToken() {
  if (typeof window !== "undefined") {
    return await localStorage.getItem("token");
  }
  return false;
}

export function removeToken(router: ReturnType<typeof useRouter>) {
  if (typeof window !== "undefined" && localStorage) {
    localStorage.removeItem("token");

    const token = localStorage.getItem("token");
    if (!token) {
      console.log("Token eliminado correctamente.");
      router.push("/login");
    } else {
      console.error("Hubo un error al eliminar el token.");
    }
  }
}


type UserData = {
  name: string;
  address: string;
  phone: number;
};

export async function patchUserData(body: UserData) {
  try {
    const token = await getSettedToken();
    console.log("Token usado:", token);
    console.log("Body enviado:", body);

    const res = await fetchApi("/me", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    console.log("Respuesta del server:", res);

    return res;
  } catch (error: any) {
    console.error("Error al guardar datos:", error);
    return false;
  }
}
