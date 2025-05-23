interface Rotas {
  nome: string;
  path: string;
}

export default () => {
  const rotas: Rotas[] = [
    { nome: "Home", path: "/" },
    { nome: "Videos", path: "/videos" },
    { nome: "Adicionar videos", path: "/videos/adicionar" },
    { nome: "Favoritos", path: "/videos/favoritos" },
    { nome: "Clientes", path: "/clientes" },
  ];
  return rotas;
}