import { api } from "../../../../services/apiClient";
import { Aluno, Professor, Secretario } from "../../../../utils/types";

type CreateResponse = {
  error?: string;
  message?: string;
};

export async function cadastrarProfessor(
  req: Professor
): Promise<CreateResponse> {
  const res = await api.post("/auth/register", req);
  if (res.status !== 200) {
    return {
      error: "Erro ao criar professor",
    };
  } else {
    return {
      message: "Professor criado com sucesso",
    };
  }
}
export async function cadastrarSecretario(
  req: Secretario
): Promise<CreateResponse> {
  const res = await api.post("/auth/register", req);
  if (res.status !== 200) {
    return {
      error: "Erro ao criar secretário",
    };
  } else {
    return {
      message: "Secretário criado com sucesso",
    };
  }
}
export async function cadastrarAluno(
  req: Aluno
): Promise<CreateResponse> {
  const res = await api.post("/auth/register", req);
  if (res.status !== 200) {
    return {
      error: "Erro ao criar aluno",
    };
  } else {
    return {
      message: "Aluno criado com sucesso",
    };
  }
}
