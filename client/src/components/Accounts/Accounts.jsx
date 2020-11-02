import React, { useState, useEffect } from "react";
import AccountCreate from "../../components/AccountCreate/AccountCreate";
import Account from "../../components/Account/Account";
import { getAccounts } from "../../services/accounts";
import "./Accounts.css";

export default function Accounts(props) {
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
        {listHidden ? "View Accounts" : "Hide Accounts"}
      </button>
      <div id="account-list">
        {allAccounts.map((account) => (
          <Account key={account._id} account={account} />
        ))}
        <AccountCreate set={setTrigger} />
      </div>
    </div>
  );
}
