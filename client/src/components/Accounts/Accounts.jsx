import React, { useState } from "react";
import AccountCreate from "../../components/AccountCreate/AccountCreate";
import "./Accounts.css";

export default function Accounts(props) {
  const [accounts, setAccounts] = useState([]);

  return (
    <div>
      <h1>Display Current Accounts (Pick one to see details)</h1>
      <AccountCreate />
    </div>
  );
}
