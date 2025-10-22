"use server";

import { z } from "zod";
import { cookies } from "next/headers";

import { registerFormSchema } from "@/app/(auth)/criar-conta/components/register-form";

export const register = async ({
    email,
    password,
    name,
}: z.infer<typeof registerFormSchema>): Promise<{ success: boolean; error?: string }> => {
    try {
        const cookieStore = await cookies();

        const res = await fetch(`${process.env.API_URL}/auth/register`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, senha: password, nome: name }),
        });

        const data = await res.json();

        console.log({ res });

        if (!res.ok) {
            throw new Error("Ocorreu um erro, tente novamente mais tarde!");
        }

        cookieStore.set("token", data.accessToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax",
            path: "/",
            maxAge: 60 * 60 * 24,
        });

        return { success: true };
    } catch (error) {
        console.log("Ocorreu um erro na rota /api/auth/register: ", error);

        return {
            success: false,
            error: error instanceof Error ? error.message : "Ocorreu um erro, tente novamente mais tarde",
        };
    }
};
