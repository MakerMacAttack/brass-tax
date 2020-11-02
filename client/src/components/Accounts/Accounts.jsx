import React, { useState, useEffect } from "react";
import AccountCreate from "../../components/AccountCreate/AccountCreate";
import Account from "../../components/Account/Account";
import { getAccounts } from "../../services/accounts";
import "./Accounts.css";

export default function Accounts(props) {
  const [allAccounts, setAllAccounts] = useState([]);
  const [trigger, setTrigger] = useState(true);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const fetchAccounts = async () => {
      const accounts = await getAccounts();
      setAllAccounts(accounts);
    };
    fetchAccounts();
  }, [trigger]);

  useEffect(() => {
    const balances = allAccounts.map((account) => account.balance);
    const sum = balances.reduce((acc, curr) => acc + curr);
    setTotal(sum);
  }, [allAccounts]);

  return (
    <div>
      <h2>Your total current savings is: {total}</h2>
      {allAccounts.map((account) => (
        <Account key={account._id} account={account} />
      ))}
      <AccountCreate set={setTrigger} />
    </div>
  );
}
