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
  professorID: string;
  professorNome: string;
  professorDisciplina: string;
  cpf: string;
  role: "student";
  periodo: string;
};

// Interface de registro do paciente
export type PacienteSignUpData = {
  // Informações pessoais:
  nome: string,
  cpf: string,
  dataDeNascimento: string,
  email: string,
  telefoneContato: string,
  sexo: string,
  estadoCivil: string,
  religiao: string,
  rendaFamiliar: string,
  profissao: string,
  outroContato: string,
  nomeDoContatoResponsavel: string,
  menorDeIdade: boolean,
  naturalidade: string,
  nacionalidade: string,
  // Endereço:
  enderecoCep: string,
  enderecoLogradouro: string,
  enderecoBairro: string,
  enderecoComplemento: string,
  enderecoCidade: string,
  enderecoUF: string,
  // Informação de tratamento:
  dataInicioTratamento: string,
  dataTerminoTratamento: string,
  quemEncaminhouID: string,
  quemEncaminhouNome: string,
  tipoDeTratamento: string,
  alunoUnieva: boolean,
  funcionarioUnieva: boolean,
  role: "paciente";
}