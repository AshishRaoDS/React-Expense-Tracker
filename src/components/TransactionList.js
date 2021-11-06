import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import TheTransaction from "./TheTransaction";

function TransactionList() {
  const { transactions } = useContext(GlobalContext);

  return (
    <div>
      <h3>History</h3>
      <ul id="list" className="list">
        {transactions.map((transaction) => (
          <TheTransaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </div>
  );
}

export default TransactionList;
