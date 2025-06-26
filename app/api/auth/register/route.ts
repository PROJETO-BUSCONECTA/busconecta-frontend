import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const POST = async (req: NextRequest) => {
  const body = await req.json();

  const res = await fetch(`${process.env.API_URL}/User`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email: body.email, senha: body.password }),
  });

  const data = await res.json();

  if (!res.ok) {
    return NextResponse.json(data, { status: res.status });
  }

  // TODO: esperar o dev backend alterar a função da rota para adicionar o token no cadastro
  // const response = NextResponse.json({ success:  })
};
