import React, { useState, useEffect } from "react";
import AccountCreate from "../Create/Create";
import Account from "../Account/Account";
import { getAccounts } from "../../services/accounts";
import "./List.css";

export default function List(props) {
  const [allAccounts, setAllAccounts] = useState([]);
  const [trigger, setTrigger] = useState(true);
  const [total, setTotal] = useState(0);
  const [listHidden, setListHidden] = useState(true);

  function handleList() {
    setListHidden((prev) => !prev);
  }

  useEffect(() => {
    const fetchAccounts = async () => {
      const accounts = await getAccounts();
      setAllAccounts(accounts);
    };
    fetchAccounts();
  }, [trigger]);

  useEffect(() => {
    if (allAccounts.length > 0) {
      const balances = allAccounts.map((account) => account.balance);
      const sum = balances.reduce((acc, curr) => acc + curr);
      setTotal(sum);
    }
  }, [allAccounts]);

  return (
    <div>
      <h2>Your total current savings is: {total}</h2>
      <button onClick={handleList}>
        <svg height="20" width="20">
          <path d="M5 0 L15 10 L5 20 Z" />
        </svg>
      </button>
      <div id={listHidden ? "account-list" : "account-list-show"}>
        {allAccounts.map((account) => (
          <Account key={account._id} account={account} set={setTrigger} />
        ))}
        <AccountCreate set={setTrigger} />
      </div>
    </div>
  );
}
