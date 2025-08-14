import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const GET = async () => {
    try {
        const cookieStore = await cookies();
        const token = cookieStore.get("token")?.value;

        if (!token) {
            return NextResponse.json({ message: "Não autorizado" }, { status: 401 });
        }

        const res = await fetch(`${process.env.API_URL}/User/pedidos`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        const data = await res.json();

        if (!res.ok) {
            console.log(data.message);

            return NextResponse.json(data, { status: res.status });
        }

        return NextResponse.json(data, { status: 200 });
    } catch (error) {
        console.log("Ocorreu um erro na rota /api/user/profile/update", error);

        return NextResponse.json(error, { status: 500 });
    }
};
