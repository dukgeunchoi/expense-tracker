import React from "react";
import { LuArrowRight } from "react-icons/lu";
import moment from "moment";
import TransactionCardInfo from "../Cards/TransactionCardInfo";

const ExpenseTransactions = ({ transactions, onSeeMore }) => {
  return (
    <div className="card">
      <div className="flex items-center justify-between">
        <h5 className="text-lg">Expense Transactions</h5>

        <button className="card-button" onClick={onSeeMore}>
          See All <LuArrowRight className="text-base" />
        </button>
      </div>

      <div className="mt-6">
        {transactions?.slice(0, 4).map((item) => (
          <TransactionCardInfo
            key={item.id}
            title={item.category}
            icon={item.icon}
            date={moment(item.date).format("DD MMM YYYY")}
            amount={item.amount}
            type="expense"
            hideDeleteButton
          />
        ))}
      </div>
    </div>
  );
};

export default ExpenseTransactions;
