"use server";

import { z } from "zod";
import { cookies } from "next/headers";

import { updateProfileFormSchema } from "@/app/(dashboard)/dashboard/perfil/components/profile-form";

export const updateUser = async ({
    documentNumber,
    name,
    tel,
    documentType,
}: z.infer<typeof updateProfileFormSchema>): Promise<{ success: boolean; error?: string }> => {
    try {
        const cookieStore = await cookies();
        const token = cookieStore.get("token")?.value;

        if (!token) {
            throw new Error("Não autorizado");
        }

        const res = await fetch(`${process.env.API_URL}/User/perfil/dados-pessoais`, {
            method: "PUT",
            headers: { Authorization: `bearer ${token}`, "Content-Type": "application/json" },
            body: JSON.stringify({
                nome: name,
                telefone: tel,
                tipoDocumento: documentType,
                documento: documentNumber,
            }),
        });

        if (!res.ok) {
            throw new Error("Ocorreu um erro, tente novamente mais tarde!");
        }

        return { success: true };
    } catch (error) {
        console.log("Ocorreu um erro na rota /api/user/profile/update", error);

        return {
            success: false,
            error: error instanceof Error ? error.message : "Ocorreu um erro, tente novamente mais tarde!",
        };
    }
};
