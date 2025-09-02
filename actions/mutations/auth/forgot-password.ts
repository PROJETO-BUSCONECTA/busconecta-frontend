"use server";

import { forgotPasswordSchema } from "@/app/(auth)/esqueceu-a-senha/components/forgot-password-form";
import { z } from "zod";

export const forgotPassword = async ({
    recoveryEmail,
}: z.infer<typeof forgotPasswordSchema>): Promise<{ success: boolean; error?: string }> => {
    try {
        const body = { email: recoveryEmail };

        const res = await fetch(`${process.env.API_URL}/auth/password/forgot`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body),
        });

        if (!res.ok) {
            if (res.status === 400) {
                throw new Error("O e-mail enviado não esta cadastrado ou é inválido");
            } else {
                throw new Error("Ocorreu um erro");
            }
        }

        return {
            success: true,
        };
    } catch (error) {
        console.log("Ocorreu um erro no forgotPassword:", error);

        return {
            success: false,
            error: error instanceof Error ? error?.message : "Ocorreu um erro",
        };
    }
};
