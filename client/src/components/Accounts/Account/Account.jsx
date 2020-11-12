import React, { useState } from "react";
import Update from "../Update/Update";
import { updateAccount, compound } from "../../../services/accounts";
import "./Account.css";

export default function Account(props) {
  const [buttonHide, setButtonHide] = useState(true);
  const [account, setAccount] = useState({
    label: props.account.label,
    balance: props.account.balance,
    interest: props.account.interest,
  });

  function handleClick() {
    setButtonHide((prev) => !prev);
  }

  function handleCompound() {
    setAccount({
      ...account,
      balance: compound(props.account, 1),
    });
    updateAccount(props.account._id, account);
    props.set((prev) => !prev);
  }

  return (
    <div>
      <h3>{props.account.label}</h3>
      <h3>{props.account.balance}</h3>
      <button onClick={handleCompound}>Compound test</button>
      <button onClick={handleClick}>
        <svg height="20" width="20">
          <path d="M5 0 L15 10 L5 20 Z" />
        </svg>
      </button>
      <div id={buttonHide ? "acct-bttn-hide" : "acct-bttn"}>
        <Update set={props.set} account={props.account} />
      </div>
    </div>
  );
}
