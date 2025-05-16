import Contact from "./Contact";
import css from "./ContactForm.module.css";

const ContactList = ({ data, onDelete }) => {
  return (
    <div className={css.contactWrap}>
      <ul className={css.contactList}>
        {data.map((item) => (
          <Contact key={item.id} data={item} onDelete={onDelete} />
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
