export type User = {
  id: string;
  nome: string;
  email: string;
  senha?: string;
  tipo: "CLIENTE" | "ADMIN";
  createdAt: "string";
};
