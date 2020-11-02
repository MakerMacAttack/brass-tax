import React, { useState } from "react";
import { deleteAccount, updateAccount } from "../../services/accounts";
import "./Account.css";

export default function Account(props) {
  const [buttonHide, setButtonHide] = useState(true);
  const [updateHide, setUpdateHide] = useState(true);
  const [account, setAccount] = useState({
    label: props.account.label,
    balance: props.account.balance,
    interest: props.account.interest,
  });

  const { label, balance, _id } = props.account;

  function handleClick() {
    setButtonHide((prev) => !prev);
  }

  function handleUpdateHide() {
    setUpdateHide((prev) => !prev);
  }

  function handleDelete() {
    deleteAccount(_id);
    props.set((prev) => !prev);
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setAccount({
      ...account,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await updateAccount(_id, account);
    setUpdateHide(true);
    props.set((prev) => !prev);
  };

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
        <button onClick={handleUpdateHide}>
          {updateHide ? "Update" : "Hide"}
        </button>
        <div id={updateHide ? "acct-update-hide" : "acct-update"}>
          <form className="update-form" onSubmit={handleSubmit}>
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
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
}
