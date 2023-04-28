// Interface do usuário
export interface User {
  id: string;
  nome: string;
  email: string;
  cpf: number;
  telefone?: number;
  role: "admin" | "student" | "secretary" | "professor";
  matricula?: number;
  periodoCursado?: string;
  disciplinaMinistrada?: string;
  idOrientador?: string;
  turno?: "noturno" | "vespertino" | "matutino";
}
