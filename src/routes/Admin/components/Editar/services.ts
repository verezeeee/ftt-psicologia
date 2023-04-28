import { api } from "../../../../services/apiClient";
import { Aluno, Professor, Secretario } from "../../../../utils/types";

type CreateResponse = {
  error?: string;
  message?: string;
};

export async function atualizarProfessor(
  req: Professor
): Promise<CreateResponse> {
  const res = await api.put(`/user/${req.id}`, req);
  if (res.status !== 200) {
    return {
      error: "Erro ao atualizar professor",
    };
  } else {
    return {
      message: "Professor atualizado com sucesso",
    };
  }
}
export async function atualizarSecretario(
  req: Secretario
): Promise<CreateResponse> {
  const res = await api.put(`/user/${req.id}`, req);
  if (res.status !== 200) {
    return {
      error: "Erro ao atualizar secretário",
    };
  } else {
    return {
      message: "Secretário atualizado com sucesso",
    };
  }
}
export async function atualizarAluno(req: Aluno): Promise<CreateResponse> {
  const res = await api.put(`/user/${req.id}`, req);
  if (res.status !== 200) {
    return {
      error: "Erro ao atualizar aluno",
    };
  } else {
    return {
      message: "Aluno atualizado com sucesso",
    };
  }
}
