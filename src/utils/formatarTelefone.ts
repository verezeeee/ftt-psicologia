export function formatarTelefone(telefone: string) {
    // Remove todos os caracteres que não são números
    telefone = telefone.replace(/\D/g, "");
  
    // Verifica se o telefone tem 11 dígitos
    if (telefone.length !== 11) {
      throw new Error("Telefone deve ter 11 dígitos");
    }
  
    // Formata o telefone na string desejada
    const telefoneFormatado = `(${telefone.slice(0, 2)}) ${telefone.slice(
      2,
      7
    )}-${telefone.slice(7)}`;
  
    return telefoneFormatado;
  }
  