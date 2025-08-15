"use server";

import { cache } from "react";
import { cookies } from "next/headers";

import { User } from "@/types/user";

export const getProfile = cache(async (): Promise<{ success: boolean; error?: string; data?: User }> => {
    try {
        const cookieStore = await cookies();
        const token = cookieStore.get("token")?.value;

        if (!token) {
            throw new Error("Token inválido");
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
            throw new Error("Ocorreu um erro, tente novamente mais tarde!");
        }

        return { success: true, data };
    } catch (error) {
        console.log("Ocorreu um erro no getProfile:", error);

        return {
            success: false,
            error: error instanceof Error ? error.message : "Ocorreu um erro, tente novamente mais tarde!",
        };
    }
});
