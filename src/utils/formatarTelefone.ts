export function formatarTelefone(telefone: any) {
  // Converte qualquer valor para uma string
  const telefoneStr = String(telefone);

  // Remove todos os caracteres que não são números
  const telefoneLimpo = telefoneStr.replace(/\D/g, "");

  // Verifica se o telefone tem 11 dígitos (ou o comprimento desejado)
  // if (telefoneLimpo.length !== 11) {
  //   throw new Error("Telefone deve ter 11 dígitos");
  // }

  // Formata o telefone na string desejada
  const telefoneFormatado = `(${telefoneLimpo.slice(0, 2)}) ${telefoneLimpo.slice(
    2,
    7
  )}-${telefoneLimpo.slice(7)}`;

  return telefoneFormatado;
}
