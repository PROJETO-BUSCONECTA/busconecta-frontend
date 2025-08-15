"use server";

import { cache } from "react";
import { cookies } from "next/headers";

// TODO: Adicionar tipo do retorno da função
export const getAllOrders = cache(async (): Promise<{ success: boolean; error?: string; data?: string[] }> => {
    try {
        const cookieStore = await cookies();
        const token = cookieStore.get("token")?.value;

        if (!token) {
            throw new Error("Token inválido");
        }

        const res = await fetch(`${process.env.API_URL}/User/pedidos`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        const data = await res.json();

        if (!res.ok) {
            if (res.status === 401) {
                throw new Error(data.message);
            } else {
                throw new Error("Ocorreu um erro!");
            }
        }

        return {
            success: true,
            data,
        };
    } catch (error) {
        console.log("Ocorreu um erro no getAllOrders:", error);

        return { success: false, error: error instanceof Error ? error.message : "Ocorreu um erro!" };
    }
});
