import React, { useState, useContext, useEffect, useRef } from "react";
import { GlobalContext } from "../context/GlobalState";

function Transaction() {
  const { addTransaction } = useContext(GlobalContext);
  const inputRef = useRef(null);
  // const moveRef = useRef(null);

  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  // const foucsMove = () => {
  //   moveRef.current.focus();
  // };

  const onSubmit = (e) => {
    e.preventDefault();
    const newTransactions = {
      id: Math.floor(Math.random() * 10000000000),
      text,
      amount: +amount,
      // the plus sign will turn it into a number which otherwise will be a string
    };

    addTransaction(newTransactions);
  };

  return (
    <div>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text..."
            ref={inputRef}
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount..."
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </div>
  );
}

export default Transaction;
