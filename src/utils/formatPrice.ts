export const formatPrice = (n: number) => {
  return n.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
};
