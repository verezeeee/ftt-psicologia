export type ProfessorSignUpData = {
  nome: string;
  cpf: string;
  role: "professor";
  disciplinaMinistrada: string;
};

export type SecretarioSignUpData = {
  nome: string;
  cpf: string;
  role: "secretary";
  turno: "noturno" | "vespertino" | "matutino";
};

export type AlunoSignUpData = {
  nome: string;
  cpf: string;
  role: "student";
  disciplina: string;
  periodoCursado: string;
  idOrientador: string;
};
