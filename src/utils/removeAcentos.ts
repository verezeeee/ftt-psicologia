export function removeAcentos(texto: string): string {
    const acentos = {
      'a': '[àáâãäå]',
      'ae': 'æ',
      'c': 'ç',
      'e': '[èéêë]',
      'i': '[ìíîï]',
      'n': 'ñ',
      'o': '[òóôõö]',
      'oe': 'œ',
      'u': '[ùúûűü]',
      'y': '[ýÿ]'
    };
    let resultado = texto;
    for (let letra in acentos) {
      const expressaoRegular = new RegExp(acentos[letra], 'g');
      resultado = resultado.replace(expressaoRegular, letra);
    }
    return resultado;
  }