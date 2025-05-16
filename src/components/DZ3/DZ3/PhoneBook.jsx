import { useEffect, useState } from "react";
import ContactForm from "./ContactForm";
import ContactList from "./ContactList";
import css from "./PhoneBook.module.css";
import SearchBox from "./SearchBox";
const phoneBookData = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];
const PhoneBook = () => {
  const [contacts, setContacts] = useState(() => {
    try {
      const savedContacts = localStorage.getItem("contacts");
      return savedContacts ? JSON.parse(savedContacts) : phoneBookData;
    } catch (error) {
      console.error("Error parsing contacts from localStorage:", error);
      return phoneBookData;
    }
  });

  // const [contacts, setContacts] = useState(phoneBookData);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (newContact) => {
    setContacts((prev) => [...prev, newContact]);
  };

  const deleteContact = (id) => {
    console.log("Deleting contact with id:", id);
    setContacts((prev) => prev.filter((item) => item.id !== id));
  };

  const filterContact = contacts.filter((item) => {
    return (
      item.name.toLowerCase().includes(filter.toLowerCase()) ||
      item.number.toLowerCase().includes(filter.toLowerCase())
    );
  });

  return (
    <div className={css.wrapBook}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox onChange={setFilter} value={filter} />
      <ContactList data={filterContact} onDelete={deleteContact} />
    </div>
  );
};

export default PhoneBook;
