import { cookies } from "next/headers";

export const getProfile = async () => {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  if (!token) {
    return null;
  }

  const res = await fetch(`${process.env.API_URL}/User/perfil`, {
    method: "GET",
    headers: {
      Authorization: `bearer ${token}`,
    },
    cache: "no-store",
  });

  const data = await res.json();

  if (!res.ok) {
    return null;
  }

  return data;
};
