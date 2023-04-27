export function formatarCPF(cpf: string): string {
  if (cpf.length !== 11) {
    throw new Error("O CPF deve ter 11 dígitos.");
  }

  const primeiraParte = cpf.slice(0, 3);
  const segundaParte = cpf.slice(3, 6);
  const terceiraParte = cpf.slice(6, 9);
  const quartaParte = cpf.slice(9);

  return `${primeiraParte}.${segundaParte}.${terceiraParte}-${quartaParte}`;
}