import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";

import Contact from "./Contact/Contact";
import { deleteContact, selectContacts } from "../../redux/contactsSlice";

import css from "./ContactList.module.css";
import { selectNameFilter } from "../../redux/filtersSlice";

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);
  const dispatch = useDispatch();

  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul className={css.contactList}>
      {visibleContacts.map((elem) => {
        return (
          <li key={elem.id} className={css.contact}>
            <Contact
              contact={elem}
              onDelete={() => dispatch(deleteContact(elem.id))}
            />
          </li>
        );
      })}
    </ul>
  );
};

ContactList.propTypes = {
  contactArr: PropTypes.array,
  onDelete: PropTypes.func,
};

export default ContactList;
