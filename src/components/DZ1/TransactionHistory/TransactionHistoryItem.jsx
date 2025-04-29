import { TiPlus } from "react-icons/ti";
import { TiMinus } from "react-icons/ti";
const TransactionHistoryItem = ({ item: { id, type, amount, currency } }) => {
  const iconTrans = amount > 700 ? <TiPlus /> : <TiMinus />;
  return (
    <>
      <tr>
        <td>{type}</td>
        <td>
          {amount}
          {iconTrans}
        </td>
        <td>{currency}</td>
      </tr>
    </>
  );
};

export default TransactionHistoryItem;
