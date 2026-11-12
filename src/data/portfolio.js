const capas = import.meta.glob('../assets/portfolio/*/capa.webp', { eager: true, import: 'default' });
const grandes = import.meta.glob('../assets/portfolio/*/*-grande.webp', { eager: true, import: 'default' });

export const projetos = Object.keys(capas)
  .sort()
  .map((caminho, indice) => {
    const pasta = caminho.split('/').at(-2);
    return {
      id: pasta,
      numero: String(indice + 1).padStart(2, '0'),
      capa: capas[caminho],
      fotos: Object.keys(grandes)
        .filter(caminhoGrande => caminhoGrande.includes(`/${pasta}/`))
        .sort()
        .map(caminhoGrande => grandes[caminhoGrande]),
    };
  });