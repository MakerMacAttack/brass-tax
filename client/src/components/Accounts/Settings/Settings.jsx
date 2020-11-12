import React, { useState } from "react";
import { handleChange, updateAccount } from "../../../services/accounts";
import "./Settings.css";

export default function Settings(props) {
  const [account, setAccount] = useState({
    label: props.account.label,
    balance: props.account.balance,
    interest: props.account.interest,
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    await updateAccount(props.account._id, account);
    props.setUpdateHide(true);
    props.set((prev) => !prev);
  };

  return (
    <div>
      <form className="update-form" onSubmit={handleSubmit}>
        <input
          className="input-label"
          placeholder="Account Nickname"
          value={account.label}
          name="label"
          autoFocus
          onChange={handleChange}
        />
        <input
          className="input-balance"
          type="number"
          value={account.balance}
          name="balance"
          onChange={handleChange}
        />
        <input
          className="input-interest"
          type="number"
          value={account.interest}
          name="interest"
          onChange={handleChange}
        />
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
}
