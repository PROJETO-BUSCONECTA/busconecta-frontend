import { cookies } from "next/headers";

export const getUser = async () => {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  if (!token) return null;

  try {
    const res = await fetch(`${process.env.API_URL}/auth/me`, {
      method: "GET",
      headers: {
        Authorization: `bearer ${token}`,
      },
      cache: "no-store",
    });

    if (!res.ok) return null;

    const user = await res.json();
    return user;
  } catch (error) {
    console.error("Erro ao buscar usuário", error);
    return null;
  }
};
