import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";

import Contact from "./Contact/Contact";
import { deleteContact } from "../../redux/contactsOps";
import { selectFilteredContacts } from "../../redux/contactsSlice";

import css from "./ContactList.module.css";

const ContactList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <ul className={css.contactList}>
      {filteredContacts.map((elem) => {
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
