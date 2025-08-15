"use server";

import { z } from "zod";
import { cookies } from "next/headers";

import { loginFormSchema } from "@/app/(auth)/login/components/login-form";

export const login = async ({
    email,
    password,
}: z.infer<typeof loginFormSchema>): Promise<{ success: boolean; error?: string; data?: string }> => {
    try {
        const cookieStore = await cookies();

        const res = await fetch(`${process.env.API_URL}/auth/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, senha: password }),
        });

        const data = await res.json();

        if (!res.ok) {
            console.log({ res });
            if (res.status === 401) {
                throw new Error("Credenciais inválidas");
            } else {
                throw new Error("Ocorreu um erro, tente novamente mais tarde");
            }
        }

        cookieStore.set("token", data.accessToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax",
            path: "/",
            maxAge: 60 * 60 * 24,
        });

        return {
            success: true,
            data: data.usuario.tipo as string,
        };
    } catch (error) {
        console.log("Erro no login:", error);

        return {
            success: false,
            error: error instanceof Error ? error?.message : "Ocorreu um erro ao processar a solicitação",
        };
    }
};
