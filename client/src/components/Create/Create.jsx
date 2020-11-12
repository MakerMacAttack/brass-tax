import React, { useState } from "react";
import { createAccount } from "../../services/accounts";
import "./Create.css";

export default function Create(props) {
  const [account, setAccount] = useState({
    label: "",
    balance: 0,
    interest: 0,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setAccount({
      ...account,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await createAccount(account);
    setAccount({
      label: "",
      balance: 0,
      interest: 0,
    });
    props.set((prev) => !prev);
  };

  return (
    <div>
      <form className="create-form" onSubmit={handleSubmit}>
        <input
          className="input-label"
          placeholder="Account Nickname"
          value={account.label}
          name="label"
          required
          autoFocus
          onChange={handleChange}
        />
        <input
          className="input-balance"
          type="number"
          value={account.balance}
          name="balance"
          required
          onChange={handleChange}
        />
        <input
          className="input-interest"
          type="number"
          value={account.interest}
          name="interest"
          required
          onChange={handleChange}
        />
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
}
