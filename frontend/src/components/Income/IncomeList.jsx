import React from "react";
import TransactionCardInfo from "../Cards/TransactionCardInfo";
import moment from "moment";

const IncomeList = ({ transactions, onDelete }) => {
  return (
    <div className="card">
      <div className="flex items-center justify-between">
        <h5 className="text-lg">Income Sources</h5>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2">
        {transactions?.map((income) => (
          <TransactionCardInfo
            key={income._id}
            title={income.source}
            icon={income.icon}
            date={moment(income.date).format("DD MMM YYYY")}
            amount={income.amount}
            type="income"
            onDelete={() => onDelete(income._id)}
          />
        ))}
      </div>
    </div>
  );
};

export default IncomeList;
