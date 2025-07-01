import TransactionHistoryItem from "./TransactionHistoryItem";
import css from "./TransactionHistory.module.css";

const TransactionHistory = ({ items }) => {
  return (
    <table className={css.table}>
      <thead className={css.thead}>
        <tr className={css.tr}>
          <th className={css.thType}>Type</th>
          <th className={css.thAmount}>Amount</th>
          <th className={css.thCurr}>Currency</th>
        </tr>
      </thead>

      <tbody className={css.body}>
        {items.map((item) => {
          return <TransactionHistoryItem key={item.id} item={item} />;
        })}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
