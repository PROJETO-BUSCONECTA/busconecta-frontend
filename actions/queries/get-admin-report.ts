"use server";

import { cache } from "react";
import { cookies } from "next/headers";

import { Report } from "@/types/report";

export const getAdminReport = cache(async (): Promise<{ success: boolean; error?: string; data?: Report }> => {
    try {
        const cookieStore = await cookies();
        const token = cookieStore.get("token")?.value;

        if (!token) {
            throw new Error("Token inválido");
        }

        const res = await fetch(`${process.env.API_URL}/admin/relatorios`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        const data = await res.json();

        if (!res.ok) {
            throw new Error("Ocorreu um erro!");
        }

        return { success: true, data };
    } catch (error) {
        console.log("Ocorreu um erro no getAdminReport", error);

        return {
            success: false,
            error: error instanceof Error ? error.message : "Ocorreu um erro!",
        };
    }
});
