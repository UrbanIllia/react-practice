import { GrUserManager } from "react-icons/gr";
import css from "./Contact.module.css";
import { BiPhoneCall } from "react-icons/bi";
import { RiDeleteBin2Line } from "react-icons/ri";

const Contact = ({ data: { id, name, number }, onDelete }) => {
  return (
    <li className={css.item}>
      <div className={css.textWrap}>
        <div className={css.nameWrap}>
          <GrUserManager />
          <h3 className={css.name}>{name}</h3>
        </div>
        <div className={css.numberWrap}>
          <BiPhoneCall />
          <span className={css.number}>{number}</span>
        </div>
      </div>
      <button
        type="button"
        className={css.deleteBtn}
        onClick={() => onDelete(id)}
      >
        <RiDeleteBin2Line />
      </button>
    </li>
  );
};

export default Contact;
