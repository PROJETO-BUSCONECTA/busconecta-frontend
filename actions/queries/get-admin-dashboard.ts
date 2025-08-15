"use server";

import { cache } from "react";
import { cookies } from "next/headers";

// TODO: alterar depois de receber as informações necessárias da dashboard
export const getAdminDashboard = cache(
    async (): Promise<{
        success: boolean;
        error?: string;
        data?: { vendasTotais: number; usuariosAtivos: number };
    }> => {
        try {
            const cookieStore = await cookies();
            const token = cookieStore.get("token")?.value;

            if (!token) {
                throw new Error("Token inválido");
            }

            const res = await fetch(`${process.env.API_URL}/admin/dashboard`, {
                method: "GET",
                headers: {
                    Authorization: `bearer ${token}`,
                },
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error("Ocorreu um erro, tente novamente mais tarde!");
            }

            console.log(data);

            return { success: true, data };
        } catch (error) {
            console.log("Ocorreu um erro no getAdminDashboard:", error);

            return {
                success: false,
                error: error instanceof Error ? error.message : "Ocorreu um erro",
            };
        }
    }
);
