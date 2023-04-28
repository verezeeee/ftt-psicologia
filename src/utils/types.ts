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
  turno?: "Noturno" | "Vespertino" | "Matutino";
}

// Interface de registro de professor
export type Professor = {
  id?: string;
  nome?: string;
  cpf?: string;
  role?: "professor";
  disciplinaMinistrada?: string;
};

// Interface de registro de secretário
export type Secretario = {
  id?: string;
  nome?: string;
  cpf?: string;
  role?: "secretary";
  turno?: "Noturno" | "Vespertino" | "Matutino";
};

// Interface de registro de aluno
export type Aluno = {
  id?: string;
  nome?: string;
  cpf?: string;
  role?: "student";
  periodoCursado?: string;
  idOrientador?: string;
  periodo?: number;
};
