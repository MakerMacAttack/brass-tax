import React, { useState } from "react";
import { deleteAccount } from "../../services/accounts";
import "./Account.css";

export default function Account(props) {
  const [buttonHide, setButtonHide] = useState(true);

  const { label, balance, _id } = props.account;
  console.log(_id);

  function handleClick() {
    setButtonHide((prev) => !prev);
  }

  function handleDelete() {
    deleteAccount(_id);
    props.set((prev) => !prev);
  }

  return (
    <div>
      <h3>{label}</h3>
      <h3>{balance}</h3>
      <button onClick={handleClick}>
        <svg height="20" width="20">
          <path d="M5 0 L15 10 L5 20 Z" />
        </svg>
      </button>
      <div id={buttonHide ? "acct-bttn-hide" : "acct-bttn"}>
        <button>Update</button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
}
