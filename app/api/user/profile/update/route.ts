import { cookies } from "next/headers";
import { NextResponse, type NextRequest } from "next/server";

export const PUT = async (req: NextRequest) => {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;

    if (!token) {
      return NextResponse.json({ message: "Não autorizado" }, { status: 401 });
    }

    const body = await req.json();

    console.log(body);

    const res = await fetch(`${process.env.API_URL}/User/perfil/dados-pessoais`, {
      method: "PUT",
      headers: { Authorization: `bearer ${token}` },
      body: JSON.stringify({
        nome: body.name,
        telefone: body.tel,
        tipoDoDocumento: body.documentType,
        numeroDoDocumento: body.documentNumber,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      return NextResponse.json(data, { status: res.status });
    }

    return NextResponse.json({ message: "Dados atualizados com sucesso" }, { status: 200 });
  } catch (error) {
    console.log("Ocorreu um erro na rota /api/user/profile/update", error);

    return NextResponse.json(error, { status: 500 });
  }
};
