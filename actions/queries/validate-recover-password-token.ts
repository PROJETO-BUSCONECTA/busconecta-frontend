"use server";

export const validateRecoverPasswordToken = async (
    token: string | null
): Promise<{ success: boolean; error?: string }> => {
    try {
        if (!token) {
            throw new Error("Token não validado");
        }

        console.log(token);

        const res = await fetch(`${process.env.API_URL}/auth/password/reset/${token}`, {
            method: "GET",
            cache: "no-store",
        });

        const data = await res.json();

        if (!res.ok) {
            throw new Error("Ocorreu um error");
        }

        if (!data.valid) {
            throw new Error("Token inválido");
        }

        return {
            success: true,
        };
    } catch (error) {
        console.log("Ocorreu um erro validateRecoverPasswordToken:", error);

        return {
            success: false,
            error: error instanceof Error ? error.message : "Ocorreu um erro",
        };
    }
};
