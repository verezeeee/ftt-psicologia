import { api } from "../../../../services/apiClient";
import {
  AlunoSignUpData,
  ProfessorSignUpData,
  SecretarioSignUpData
} from "../../../../utils/types";
import { useEffect } from "react";

if (typeof window !== "undefined") {
  var token = localStorage.getItem("authToken");
}

type CreateResponse = {
  error?: string;
  message?: string;
};

export async function cadastrarProfessor(
  req: ProfessorSignUpData
): Promise<CreateResponse> {
  const res = await api.post("/auth/registroProfessor", req);
  console.log(res)
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
  req: SecretarioSignUpData
): Promise<CreateResponse> {
  const res = await api.post("/auth/registroSecretario", req);
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
  req: AlunoSignUpData
): Promise<CreateResponse> {
  const res = await api.post("/auth/registroAluno", req, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  console.log(res)
  if (res.status !== 200) {
    return {
      error: "Erro ao criar aluno",
    };

    return res.data
  } else {
    return {
      message: "Aluno criado com sucesso",
    };
  }
}
