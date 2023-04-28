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

// Interface de registro de professor
export type ProfessorSignUpData = {
  nome: string;
  cpf: string;
  role: "professor";
  disciplinaMinistrada: string;
};

// Interface de registro de secretário
export type SecretarioSignUpData = {
  nome: string;
  cpf: string;
  role: "secretary";
  turno: "noturno" | "vespertino" | "matutino";
};

// Interface de registro de aluno
export type AlunoSignUpData = {
  nome: string;
  cpf: string;
  role: "student";
  periodoCursado: string;
  idOrientador: string;
  periodo: number;
};
