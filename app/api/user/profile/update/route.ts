import { cookies } from "next/headers";
import { NextResponse, type NextRequest } from "next/server";

export const PUT = async (req: NextRequest) => {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  if (!token) {
    return NextResponse.json({ message: "Não autorizado" }, { status: 401 });
  }

  const body = await req.json();

  console.log(body);

  const res = await fetch(`${process.env.API_URL}/User/perfil`, {
    method: "PUT",
    headers: { Authorization: `bearer ${token}` },
    body: JSON.stringify({
      id: body.id,
      nome: body.name,
      email: body.email,
      senha: "senhateste",
      tipo: "CLIENTE",
      // telefone: body.tel,
      // tipoDoDocumento: body.documentType,
      // numeroDoDocumento: body.documentNumber,
    }),
  });

  const data = await res.json();

  if (!res.ok) {
    return NextResponse.json(data, { status: res.status });
  }

  return NextResponse.json({ message: "Dados atualizados com sucesso" }, { status: 200 });
};
