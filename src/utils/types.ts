// Interface do usuário
export interface User {
  id: string;
  nome: string;
  cpf?: number;
  role: "admin" | "student" | "secretary" | "professor";
  matricula?: number;
  telefone?: number;
  periodoCursado?: string;
  disciplina?: string;
  disciplinaMinistrada?: string;
  idOrientador?: string;
  idSecretaria?: string;
  turno?: string;
  email: string;
}
