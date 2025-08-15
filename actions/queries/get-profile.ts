"use server";

import { cache } from "react";
import { cookies } from "next/headers";

import { User } from "@/types/user";

export const getProfile = cache(async (): Promise<User | null> => {
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
        console.log(data.message);

        throw new Error(data.message);
    }

    return data;
});
