export type User = {
  id: string;
  nome: string;
  email: string;
  senha?: string;
  telefone: string;
  tipoDocumento: "CPF" | "Passaporte";
  documento: string;
  tipo: "CLIENTE" | "ADMIN";
  createdAt: "string";
};
