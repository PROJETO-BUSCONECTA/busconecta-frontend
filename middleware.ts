import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const middleware = (request: NextRequest) => {
  const token = request.cookies.get("token");

  if (!token) {
    return NextResponse.redirect(new URL(`/login?redirectUrl=${request.nextUrl.pathname}`, request.url));
  }

  return NextResponse.next();
};

export const config = {
  matcher: ["/dashboard/:path*", "/viagem/pagamento", "/viagem/resumo"],
};
