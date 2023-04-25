// Interface do usuário
export interface User {
  id: string;
  nome: string;
  cpf?: number;
  role: "admin" | "student" | "secretary" | "professor";
  matricula?: number;
  periodoCursado?: string;
  disciplina?: string;
  disciplinaMinistrada?: string;
  idOrientador?: string;
  idSecretaria?: string;
  email: string;
}
