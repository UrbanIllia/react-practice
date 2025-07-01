import { TiPlus } from "react-icons/ti";
import { TiMinus } from "react-icons/ti";
import css from "./TransactionHistoryItem.module.css";
const TransactionHistoryItem = ({ item: { id, type, amount, currency } }) => {
  const iconTrans =
    amount > 700 ? <TiPlus color="green" /> : <TiMinus color="red" />;
  return (
    <>
      <tr className={css.tr}>
        <td className={css.td}>{type}</td>
        <td className={css.td2}>
          {amount}
          {iconTrans}
        </td>
        <td className={css.td3}>{currency}</td>
      </tr>
    </>
  );
};

export default TransactionHistoryItem;
