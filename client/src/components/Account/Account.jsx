import React, { useState } from "react";
import {
  deleteAccount,
  updateAccount,
  compound,
} from "../../services/accounts";
import "./Account.css";

export default function Account(props) {
  const [buttonHide, setButtonHide] = useState(true);
  const [updateHide, setUpdateHide] = useState(true);
  const [deposit, setDeposit] = useState(0);
  const [withdrawl, setWithdrawl] = useState(0);

  const { label, balance, interest, _id } = props.account;

  const [account, setAccount] = useState({
    label,
    balance,
    interest,
  });

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

  async function handleDeposit(e) {
    e.preventDefault();
    setAccount({
      ...account,
      balance: props.account.balance + deposit - withdrawl,
    });
    await updateAccount(_id, account);
    setUpdateHide((prev) => !prev);
    props.set((prev) => !prev);
  }

  function handleCompound() {
    setAccount({
      ...account,
      balance: compound(props.account, 1),
    });
    updateAccount(_id, account);
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
          <form className="deposit-form" onSubmit={handleDeposit}>
            <label htmlFor="deposit">Deposit</label>
            <input
              className="input-deposit"
              type="number"
              value={deposit}
              name="deposit"
              onChange={(e) => setDeposit(e.target.value)}
            />
            <label htmlFor="withdrawl">Withdrawl</label>
            <input
              className="input-withdrawl"
              type="number"
              value={withdrawl}
              name="withdrawl"
              onChange={(e) => setWithdrawl(e.target.value)}
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
