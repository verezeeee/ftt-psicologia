import { cpf } from "cpf-cnpj-validator";

export const validarCPF = (value: string) => cpf.isValid(value);

export const formatarCPF = (value: string) => cpf.format(value);