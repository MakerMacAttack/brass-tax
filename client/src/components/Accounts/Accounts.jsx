import React, { useState, useEffect } from "react";
import AccountCreate from "../../components/AccountCreate/AccountCreate";
import Account from "../../components/Account/Account";
import { getAccounts } from "../../services/accounts";
import "./Accounts.css";

export default function Accounts(props) {
  const [allAccounts, setAllAccounts] = useState([]);
  const [trigger, setTrigger] = useState(true);

  useEffect(() => {
    const fetchAccounts = async () => {
      const accounts = await getAccounts();
      setAllAccounts(accounts);
    };
    fetchAccounts();
  }, [trigger]);

  return (
    <div>
      {allAccounts.map((account) => (
        <Account key={account._id} account={account} />
      ))}
      <AccountCreate set={setTrigger} />
    </div>
  );
}
