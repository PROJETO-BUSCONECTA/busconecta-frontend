import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json();

    const res = await fetch(`${process.env.API_URL}/auth/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: body.email, senha: body.password, nome: body.name }),
    });

    const data = await res.json();

    if (!res.ok) {
      return NextResponse.json(data, { status: res.status });
    }

    // TODO: esperar o dev backend alterar a função da rota para adicionar o token no cadastro
    const response = NextResponse.json({ success: true }, { status: 201 });

    response.cookies.set("token", data.accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24,
    });

    return response;
  } catch (error) {
    console.log("Ocorreu um erro na rota /api/auth/register: ", error);

    return NextResponse.json(error, { status: 500 });
  }
};
