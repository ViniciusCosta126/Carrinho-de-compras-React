import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/auth";

export default function Totais() {
  const { carrinho } = useContext(AuthContext);
  const [total, setValor] = useState(0);
  useEffect(() => {
    soma();
  }, [carrinho]);
  const soma = () => {
    var valor_novo = 0;
    carrinho.forEach((element) => {
      valor_novo += element.valor;
    });
    setValor(valor_novo);
  };
  return (
    <div>
      <h1>Total de Itens: {carrinho.length}</h1>
      <h1>Valor Total:R${total.toFixed(2)}</h1>
    </div>
  );
}
