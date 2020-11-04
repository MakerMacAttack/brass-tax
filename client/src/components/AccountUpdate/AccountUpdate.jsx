import React, { useState } from "react";
import { deleteAccount, updateAccount } from "../../services/accounts";
import "./AccountUpdate.css";

export default function AccountUpdate(props) {
  const [deposit, setDeposit] = useState(0);
  const [withdrawl, setWithdrawl] = useState(0);
  const [updateHide, setUpdateHide] = useState(true);
  const [account, setAccount] = useState({
    label: props.account.label,
    balance: props.account.balance,
    interest: props.account.interest,
  });

  function handleUpdateHide() {
    setUpdateHide((prev) => !prev);
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setAccount({
      ...account,
      [name]: value,
    });
  };

  function handleDelete() {
    deleteAccount(props.account._id);
    props.set((prev) => !prev);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    await updateAccount(props.account._id, account);
    setUpdateHide(true);
    props.set((prev) => !prev);
  };

  async function handleDeposit(e) {
    e.preventDefault();
    setAccount({
      ...account,
      balance: props.account.balance + deposit - withdrawl,
    });
    await updateAccount(props.account._id, account);
    setUpdateHide((prev) => !prev);
    props.set((prev) => !prev);
  }

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
      <button onClick={handleUpdateHide}>
        {updateHide ? "Update" : "Hide"}
      </button>
      <div id={updateHide ? "acct-update-hide" : "acct-update"}>
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
  );
}
