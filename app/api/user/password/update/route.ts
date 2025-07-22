import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(req: NextRequest) {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;

    if (!token) {
      return NextResponse.json({ message: "Não autorizado" }, { status: 401 });
    }

    const body = await req.json();

    console.log({ body });

    const res = await fetch(`${process.env.API_URL}/User/perfil/senha`, {
      method: "PUT",
      headers: { Authorization: `bearer ${token}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        novaSenha: body.newPassword,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      console.log(data.message);

      return NextResponse.json(data, { status: res.status });
    }

    return NextResponse.json({ message: "Dados atualizados com sucesso" }, { status: 200 });
  } catch (error) {
    console.log("Ocorreu um erro na rota /api/user/password/update", error);

    return NextResponse.json(error, { status: 500 });
  }
}
