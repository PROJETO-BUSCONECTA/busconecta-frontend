"use server";

import { z } from "zod";
import { cookies } from "next/headers";

import { changePasswordFormSchema } from "@/app/(dashboard)/dashboard/perfil/components/password-form-box";

export const changePassword = async ({
    actualPassword,
    newPassword,
}: z.infer<typeof changePasswordFormSchema>): Promise<{ success: boolean; error?: string }> => {
    try {
        const cookieStore = await cookies();
        const token = cookieStore.get("token")?.value;

        if (!token) {
            throw new Error("Não autorizado");
        }

        const res = await fetch(`${process.env.API_URL}/User/perfil/senha`, {
            method: "PUT",
            headers: { Authorization: `bearer ${token}`, "Content-Type": "application/json" },
            body: JSON.stringify({
                senhaAtual: actualPassword,
                novaSenha: newPassword,
            }),
        });

        if (!res.ok) {
            console.log(res.status);

            throw new Error("Ocorreu um erro, tente novamente mais tarde!");
        }

        return { success: true };
    } catch (error) {
        console.log("Ocorreu um erro na rota /api/user/password/update", error);

        return {
            success: false,
            error: error instanceof Error ? error.message : "Ocorreu um erro, tente novamente mais tarde!",
        };
    }
};
