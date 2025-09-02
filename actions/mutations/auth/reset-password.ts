"use server";

import { z } from "zod";

import { recoverPasswordFormSchema } from "@/app/(auth)/recuperar-senha/components/recover-password-form";

export const resetPassword = async ({
    newPassword,
    token,
}: z.infer<typeof recoverPasswordFormSchema> & { token: string | null }): Promise<{
    success: boolean;
    error?: string;
}> => {
    try {
        const body = { token, newPassword };

        const res = await fetch(`${process.env.API_URL}/auth/password/reset`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body),
        });

        if (!res.ok) {
            const data = await res.json();

            if (res.status === 400) {
                throw new Error(data.message);
            } else {
                throw new Error("Ocorreu um erro");
            }
        }

        return {
            success: true,
        };
    } catch (error) {
        console.log("Ocorreu um erro no resetPassword:", error);

        return {
            success: false,
            error: error instanceof Error ? error.message : "Ocorreu um erro",
        };
    }
};
