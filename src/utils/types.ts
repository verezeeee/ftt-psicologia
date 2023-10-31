// Interface do usuário
export interface User {
  id: string;
  nome: string;
  email: string;
  cpf: string;
  telefone?: string;
  role: "admin" | "student" | "secretary" | "professor";
  matricula?: string;
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
  telefoneContato: string;
  email: string;
  disciplina: string;
  disciplinaMinistrada: string;
};

// Interface de registro de secretário
export type SecretarioSignUpData = {
  nome: string;
  cpf: string;
  telefoneContato: string;
  email: string;
  role: "secretary";
  turno: "noturno" | "vespertino" | "matutino";
};

// Interface de registro de aluno
export type AlunoSignUpData = {
  nome: string;
  email: string;
  matricula: string;
  telefoneContato: string;
  professor: string;
  cpf: string;
  role: "student";
  turno: "noturno" | "vespertino" | "matutino";
  periodoCursado: string;
  idOrientador: string;
  periodo: string;
};

// Interface de registro do paciente
export type PacienteSignUpData = {
  
}