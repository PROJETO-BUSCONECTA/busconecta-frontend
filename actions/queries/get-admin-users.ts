"use server";

import { cache } from "react";
import { cookies } from "next/headers";

import { User } from "@/types/user";

export const getAdminUsers = cache(async (): Promise<{ success: boolean; error?: string; data?: User[] }> => {
    try {
        const cookieStore = await cookies();
        const token = cookieStore.get("token")?.value;

        if (!token) {
            throw new Error("Token inválido");
        }

        const res = await fetch(`${process.env.API_URL}/admin/usuarios`, {
            method: "GET",
            headers: {
                Authorization: `bearer ${token}`,
            },
        });

        const data = await res.json();

        if (!res.ok) {
            throw new Error("Ocorreu um erro, tente novamente mais tarde!");
        }

        return { success: true, data };
    } catch (error) {
        console.log("Ocorreu um erro no getAdminUsers:", error);

        return { success: false, error: error instanceof Error ? error.message : "Ocorreu um erro!" };
    }
});
