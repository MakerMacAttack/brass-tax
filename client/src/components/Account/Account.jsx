import React from "react";
import "./Account";

export default function Account(props) {
  const { label, balance } = props.account;
  return (
    <div>
      <h3>{label}</h3>
      <h3>{balance}</h3>
    </div>
  );
}
