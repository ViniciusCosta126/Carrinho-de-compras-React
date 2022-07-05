import React, { useContext } from "react";
import "./item.css";
import { AuthContext } from "../providers/auth";
export default function Item() {
  var itens = [
    { id: 1, nome: "Tenis", valor: 210.2 },
    { id: 2, nome: "Raquete", valor: 1210.2 },
    { id: 3, nome: "Computador", valor: 2210.2 },
    { id: 4, nome: "Bola", valor: 110.2 },
    { id: 5, nome: "Celular", valor: 1710.2 },
    { id: 6, nome: "Chocolate", valor: 2.2 }
  ];
  const { carrinho, setCarrinho } = useContext(AuthContext);
  function handleClick(item) {
    setCarrinho([...carrinho, item]);
  }
  function handleDelete() {
    setCarrinho([]);
  }
  return (
    <div>
      <button onClick={handleDelete} className="delete_cart">
        Limpar Carrinho
      </button>
      <div className="itens__container">
        {itens.map((item) => {
          return (
            <div className="item__container" key={item.id}>
              <p>{item.nome}</p>
              <p>R${item.valor}</p>

              <div>
                <button onClick={() => handleClick(item)}>Adicionar</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
