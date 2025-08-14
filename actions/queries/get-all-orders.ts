import { cookies } from "next/headers";

// TODO: Adicionar tipo do retorno da função
export const getAllOrders = async () => {
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;

    if (!token) {
        return null;
    }

    const res = await fetch(`${process.env.API_URL}/User/pedidos`, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    const data = await res.json();

    if (!res.ok) {
        console.log(data.message);

        return null;
    }

    return data;
};
